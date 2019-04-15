import "phaser"

export default class PlayerShip {
    public sprite: Phaser.Physics.Arcade.Sprite
    
    constructor(scene : Phaser.Scene, key : string, x : number, y : number) {
        this.sprite = scene.physics.add.sprite(x, y, key);
        this.sprite.setCollideWorldBounds(true);
    }

    setX(x : number) : void {
        this.sprite.x = x;
    }

    setY(y : number) : void {
        this.sprite.y = y;
    }

    getX() : number {
        return this.sprite.x;
    }

    getY() : number {
        return this.sprite.y;
    }

    getWidth() : number {
        return this.sprite.width;
    }

    getHeight() : number {
        return this.sprite.height;
    }


}