// ----------- sprite class ------------
class Sprite {
    constructor({ 
        position, 
        image, 
        frames = {col: 1, row: 1, hold: 10}, 
        animate = false, 
        rotation = 0,
        scale = 1
    }) { 
        this.position = position
        this.image = new Image()
        this.frames = {...frames, colVal: 0, rowVal: 0, elapsed: 0}
        
        this.image.onload = () => {
            this.width = this.image.width / this.frames.col
            this.height = this.image.height / this.frames.row
        }
        this.image.src = image.src
        
        this.animate = animate
        this.opacity = 1
        this.rotation = rotation
        this.scale = scale
    }
    // draw (class method)
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
            this.image.width / this.frames.col * this.scale,
            this.image.height / this.frames.row * this.scale
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