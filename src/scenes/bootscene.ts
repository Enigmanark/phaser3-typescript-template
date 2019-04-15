import "phaser"

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload() {
        this.load.image("background1", "assets/darkPurple.png");
        this.load.image("playerShip", "assets/playerShip1_red.png");
        this.load.image("laserRed01", "assets/laserRed01.png");
    }

    create() {
        this.registry.set("playerVelocity", 200);
        this.registry.set("laserVelocity", 500);
        this.scene.start("PlayScene");
    }
}