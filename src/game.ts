class Game {
    character = new Character();
    platform = new Platform(createVector(400, 200));
    

    draw() {
        fill(this.character.color)
        rect(this.character.position.x, this.character.position.y, this.character.width, this.character.height)
        
        fill(this.platform.color)
        rect(this.platform.position.x, this.platform.position.y, this.platform.width, this.platform.height)
    }    
    /*update() {
        keyPressed
    }*/
}
