class Platform extends Entity {
    protected speed: p5.Vector;
    constructor(position: p5.Vector) {
        super(10, 100, position, color(146, 211, 202));
        this.speed = createVector(1,0);
      }
      
    public draw() {
      fill(this.color)
      rect(this.position.x, this.position.y, this.width, this.height)
    }

    public update() {
      this.position.y += this.speed.y;
      this.position.x -= this.speed.x;
    }


}
