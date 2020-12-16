class Platform extends Entity {
    protected speed: p5.Vector;
    constructor(position: p5.Vector) {
        super(10, 100, position, color(146, 211, 202));
        this.speed = createVector(1,0);
      }
      
}
