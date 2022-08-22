// ------------------ extending the parent Sprites for monsters ----------------
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
        this.activeHealth = this.health
        this.isEnemy = isEnemy
        this.name = name
        this.attacks = attacks
    }
    // faint (class method)
    faint() {
        document.querySelector('#battleDialogueBox').innerHTML = this.name + " fainted!";
        gsap.to(this.position, {
            y: this.position.y + 20
        })
        gsap.to(this, {
            opacity: 0
        })
        audio.battle.stop()
        audio.victory.play()
    }
    // attack (class method)
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
        recipient.activeHealth -= attack.damage

        console.log(recipient.health)
        console.log(recipient.activeHealth)
        console.log(recipient.health)

        // switch case for attack choices
        switch (attack.name) {
            // case fireball
            case "Fireball":
                audio.initFireball.play()
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
                        audio.fireballHit.play()
                        gsap.to(healthbar, {
                            width: (recipient.health - (recipient.health - recipient.activeHealth)) + "%"
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
            case "Mudthrow":
                audio.initFireball.play()
                // grab and assign sprite image
                const mudthrowImage = new Image()
                mudthrowImage.src = "./images/mudthrow.png"
                // create the new sprite
                const mudthrow = new Sprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: mudthrowImage,
                    frames: {
                        col: 6,
                        row: 1,
                        hold: 10
                    },
                    animate: true,
                    rotation
                    
                })
                // remove form dynamic sprite array
                renderedSprites.splice(1, 0, mudthrow)

                // moving fireball to enemy
                gsap.to(mudthrow.position, {
                    x: recipient.position.x,
                    y: recipient.position.y,
                    onComplete: () => {
                        // enemy gets hit
                        audio.fireballHit.play()
                        gsap.to(healthbar, {
                            width: (recipient.health - (recipient.health - recipient.activeHealth)) + "%"
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
            case "Gust":
                audio.initFireball.play()
                // grab and assign sprite image
                const gustImage = new Image()
                gustImage.src = "./images/gust.png"
                // create the new sprite
                const gust = new Sprite({
                    position: {
                        x: this.position.x,
                        y: this.position.y
                    },
                    image: gustImage,
                    frames: {
                        col: 6,
                        row: 1,
                        hold: 10
                    },
                    animate: true,
                    rotation
                    
                })
                // remove form dynamic sprite array
                renderedSprites.splice(1, 0, gust)

                // moving fireball to enemy
                gsap.to(gust.position, {
                    x: recipient.position.x,
                    y: recipient.position.y,
                    onComplete: () => {
                        // enemy gets hit
                        audio.fireballHit.play()
                        gsap.to(healthbar, {
                            width: (recipient.health - (recipient.health - recipient.activeHealth))  + "%"
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
            // tackle case
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
                        audio.tackleHit.play()
                        gsap.to(healthbar, {
                            width: (recipient.health - (recipient.health - recipient.activeHealth)) + "%"
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