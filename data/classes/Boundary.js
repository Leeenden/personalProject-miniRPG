// ----------------- Boundary class -----------------------------
class Boundary {
    // static property for zoomed in map image (16px actual x 4 zoom)
    static width = 24
    static height = 24
    constructor({position, color, isWarp, isWall, isBZ}) {
        this.position = position
        this.color = color
        this.isWarp = isWarp
        this.isWall = isWall
        this.isBZ = isBZ
        this.width = 24
        this.height = 24
        
    }
    // draw the block 
    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};