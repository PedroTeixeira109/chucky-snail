import { Player } from "./player.js";

export class Level001 extends Phaser.Scene 
{
    constructor() 
    {
        super('Level001');
    }


    init() 
    {
        this.controls = this.input.keyboard.createCursorKeys();

        
    }

    create() 
    {
        this.add.image(0, 0, 'background').setOrigin(0).setScale(2);
        this.player = new Player(this, this.game.config.width * 0.5, this.game.config.height * 0.5, 'player', 6);


    }

    update(time) 
    {
        this.player.update(time);
    }
}