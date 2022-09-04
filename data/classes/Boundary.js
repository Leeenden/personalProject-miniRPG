// ----------------- Boundary class -----------------------------
class Boundary {
    // static property for zoomed in map image (16px actual x 4 zoom)
    static width = 32
    static height = 32
    constructor({position, color, isWarp, isWall, isBZ}) {
        this.position = position
        this.color = color
        this.isWarp = isWarp
        this.isWall = isWall
        this.isBZ = isBZ
        this.width = 32
        this.height = 32
        
    }
    // draw the block 
    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};