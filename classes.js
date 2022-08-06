// class definining
class Sprite {
    constructor({ position, image, frames = {col: 1, row: 1, hold: 10}, animate = false, rotation = 0}) { 
        this.position = position
        this.image = image
        this.frames = {...frames, colVal: 0, rowVal: 0, elapsed: 0}

        this.image.onload = () => {
            this.width = this.image.width / this.frames.col
            this.height = this.image.height / this.frames.row
            // console.log(this.width)
            // console.log(this.height)
        }
        this.animate = animate
        this.opacity = 1
        this.rotation = rotation
        
        // this.scale = 1
    }
    draw() {
        c.save()
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        c.rotate(this.rotation)
        c.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        c.globalAlpha = this.opacity
        c.drawImage(
            this.image,
            this.frames.colVal * this.width,
            this.frames.rowVal * this.height,
            this.image.width / this.frames.col,
            this.image.height / this.frames.row,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.col,
            this.image.height / this.frames.row
        )
        c.restore()

        if (!this.animate) return

        if (this.frames.col > 1){
            this.frames.elapsed++
        }
        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.colVal < this.frames.col - 1) this.frames.colVal++
            else this.frames.colVal = 0
        }
    }
    
}
// extending the parent Sprites for monsters
class Monster extends Sprite {
    constructor({
        position, 
        image, 
        frames = {col: 1, row: 1, hold: 10}, 
        animate = false, 
        rotation = 0,
        isEnemy = false,  
        name,
        attacks
    }) {
        super({
            position, 
            image, 
            frames, 
            animate, 
            rotation,
        })
        // change health to constructor later for variability
        this.health = 100
        this.isEnemy = isEnemy
        this.name = name
        this.attacks = attacks
    }
    faint() {
        document.querySelector('#battleDialogueBox').innerHTML = this.name + " fainted!";
        gsap.to(this.position, {
            y: this.position.y + 20
        })
        gsap.to(this, {
            opacity: 0
        })
    }
    attack({attack, recipient, renderedSprites}) {
        document.querySelector('#battleDialogueBox').style.display ="block";
        document.querySelector('#battleDialogueBox').innerHTML = this.name + " used " + attack.name;
        // healthbar variables
        let healthbar = "#enemyhealthFull"
        if(this.isEnemy) healthbar = "#playerhealthFull"
        // rotation variables
        let rotation = 1
        if(this.isEnemy) rotation = -2.7
        // healthbar calc for all attacks
        recipient.health -= attack.damage
        // switch case for attack choices
        switch (attack.name) {
            case "Fireball":
                // grab and assign sprite image
                const fireballImage = new Image()
                fireballImage.src = "./images/fireball.png"
                // create the new sprite
                const fireball = new Sprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: fireballImage,
                    frames: {
                        col: 4,
                        row: 1,
                        hold: 10
                    },
                    animate: true,
                    rotation
                    
                })
                // remove form dynamic sprite array
                renderedSprites.splice(1, 0, fireball)

                // moving fireball to enemy
                gsap.to(fireball.position, {
                    x: recipient.position.x,
                    y: recipient.position.y,
                    onComplete: () => {
                        // enemy gets hit
                        gsap.to(healthbar, {
                            width: recipient.health + "%"
                        })
                        // player action animation 
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })
                        // enemy reaction animation
                        gsap.to(recipient, {
                            opacity: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                            
                        })
                        renderedSprites.splice(1, 1)
                    }
                })

                break
            case "Tackle":
                const tl = gsap.timeline()

                let movementDistance = 20
                if(this.isEnemy) movementDistance = -20

                tl.to(this.position, {
                    x: this.position.x - movementDistance
                }).to(this.position, {
                    x: this.position.x + movementDistance * 2,
                    duration: 0.1,
                    onComplete: () => {
                        // enemy gets hit
                        gsap.to(healthbar, {
                            width: recipient.health + "%"
                        })
                        // player action animation 
                        gsap.to(recipient.position, {
                            x: recipient.position.x + 10,
                            yoyo: true,
                            repeat: 5,
                            duration: 0.08
                        })
                        // enemy reaction animation
                        gsap.to(recipient, {
                            opacity: 0,
                            repeat: 5,
                            yoyo: true,
                            duration: 0.08
                            
                        })
                    }
                }).to(this.position, {
                    x: this.position.x 
                })

            break;
        }
    }
}

// define booundaries class
class Boundary {
    // static property for zoomed in map image (16px actual x 4 zoom)
    static width = 64
    static height = 64
    constructor({position}) {
        this.position = position
        this.width = 64
        this.height = 64
    }

    draw() {
        c.fillStyle = "rgba(255, 0, 0, 0)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};