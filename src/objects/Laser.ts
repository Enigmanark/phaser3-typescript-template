import "phaser"

export default class Laser extends Phaser.Physics.Arcade.Sprite {
    velocity : number;
    scene : Phaser.Scene;

    constructor(scene : Phaser.Scene, x : number, y : number, key : string) {
        super(scene, x, y, key);
        scene.physics.add.existing(this);
        this.scene = scene;

        scene.sys.displayList.add(this);
        scene.sys.updateList.add(this);
        
        this.velocity = scene.registry.get("laserVelocity");
        this.body.velocity.y = -this.velocity;
    }

    preUpdate(time: number, delta : number) : void {
        if(this.y < -50) {
            this.destroy();
            console.log("Destroyed");
        }
    }
}