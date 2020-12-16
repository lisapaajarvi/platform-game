abstract class Entity {
    height: number;
    width: number;
    position: p5.Vector;
    color: p5.Color;

    constructor(height: number, width: number, position: p5.Vector, color: p5.Color) {
        this.height = height;
        this.width = width;
        this.position = position;
        this.color = color;
      }
}