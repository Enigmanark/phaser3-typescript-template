import "phaser"
import BootScene from "../scenes/bootscene";
import PlayScene from "../scenes/playscene";

export default class Game extends Phaser.Game {
    constructor() {
        var config : GameConfig = {
            title: "TypeInvaders",
            width: 960,
            height: 640,
            parent: "game",
            type: Phaser.AUTO,
            scene: [ BootScene, PlayScene],
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 0 },
                    debug: false
                }
            },
            backgroundColor: "#f5cc69",
        }

        super(config);
    }
}