// class definining
class Sprite {
    constructor({ position, image, frames = {col: 1, row: 1, hold: 10}, animate = false}) { 
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
    }
    draw() {
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
        if (!this.animate) return

        if (this.frames.col > 1){
            this.frames.elapsed++
        }
        if (this.frames.elapsed % this.frames.hold === 0) {
            if (this.frames.colVal < this.frames.col - 1) this.frames.colVal++
            else this.frames.colVal = 0
        }
    }
    attack({attack, recipient}) {
        const tl = gsap.timeline()
        tl.to(this.position, {
            x: this.position.x -20
        }).to(this.position, {
            x: this.position.x + 40,
            duration: 0.1,
            onComplete() {
                gsap.to(recipient.position, {
                    x: recipient.position.x + 10,
                    yoyo: true,
                    repeat: 5
                })
            }
        }).to(this.position, {
            x: this.position.x 
        });
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