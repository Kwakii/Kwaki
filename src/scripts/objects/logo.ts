export class LogoDeux extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
      super (scene, x, y, 'red')
      scene.add.existing(this)
      scene.physics.add.existing(this)
  
      this.setCollideWorldBounds(true)
      .setBounce(0.6,0.6)
      .setInteractive()
      .on('pointerdown', () => {        
        this.setVelocity(200,400)
      })
    }
}