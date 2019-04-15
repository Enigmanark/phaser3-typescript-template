import "phaser"
import PlayerShip from "../objects/PlayerShip";
import Laser from "../objects/Laser";

export default class PlayScene extends Phaser.Scene {
    private playerShip : PlayerShip;

    private lasers : Laser[]; 

    private keyA : Phaser.Input.Keyboard.Key;
    private keyD : Phaser.Input.Keyboard.Key;
    private keySpace : Phaser.Input.Keyboard.Key;

    constructor() {
        super("PlayScene");
    }

    create() : void {
        //Add background
        var bg = this.add.tileSprite(0, 0, Number(this.game.config.width), Number(this.game.config.height), "background1");
        bg.setOrigin(0, 0);

        //Add player ship
        this.playerShip = new PlayerShip(this, "playerShip", 0, 0);

        let playerPosX: number = (Number(this.game.config.width) / 2);
        this.playerShip.setX(playerPosX);

        let playerPosY: number = (Number(this.game.config.height) - (this.playerShip.getHeight() / 2) - 10);
        this.playerShip.setY(playerPosY);

        //Setup laser array
        this.lasers = [];

        //Setup keyboard
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(time : number, delta : number) : void {
        this.processInput(time, delta);
    }

    private processInput(time : number, delta : number) : void {
        var velocity = this.registry.get("playerVelocity");

        //Horizontal movement
        if(this.keyA.isDown) {
            this.playerShip.sprite.body.velocity.x = -velocity;
        }
        else if(this.keyD.isDown) {
            this.playerShip.sprite.body.velocity.x = velocity;
        }
        else {
            this.playerShip.sprite.body.velocity.x = 0;
        }

        //Firing
        if(Phaser.Input.Keyboard.JustDown(this.keySpace)) {
            this.lasers.push(new Laser(this, this.playerShip.getX(), this.playerShip.getY(), "laserRed01"));
        }
    }
}