export class Player extends Phaser.Physics.Arcade.Sprite 
{
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.setCollideWorldBounds(true);
        this.setScale(0.9);

        this.horizontal_velocity = 200;
        this.jump_velocity = 600;

        this.controls = scene.input.keyboard.createCursorKeys();
    }

    update(time) 
    {
        let onGround = this.body.blocked.down || this.body.touching.down

        if(this.controls.left.isDown) 
        {
            this.setVelocityX(-this.horizontal_velocity);
            this.flipX = true;
            if(onGround && !this.anims.isPlaying)
            {
                this.anims.play('walking');
            }
        }else if (this.controls.right.isDown)
        {
            this.setVelocityX(this.horizontal_velocity);
            this.flipX = false;
            if(onGround && !this.anims.isPlaying)
            {
                this.anims.play('walking');
            }
        }else 
        {
            this.setVelocityX(0);
            if(this.anims.isPlaying) 
            {
                this.anims.stop('walking');
            }
            if(onGround)
            {
                this.setFrame(this.initialFrame);
                this.initialFrame = 6;
            }
        }
        if(onGround && this.controls.space.isDown) 
        {
                this.setVelocityY(-this.jump_velocity);
                this.setFrame(5);

        }
    } 
}