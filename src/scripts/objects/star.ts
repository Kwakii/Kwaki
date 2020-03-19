export class Star extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene,  x: number, y: number) {
      super (scene, x, y, 'star')

      scene.add.existing(this)
      scene.physics.add.existing(this)         

      this.setBounce(Phaser.Math.FloatBetween(0.4,0.8), Phaser.Math.FloatBetween(0.4,0.8))
    }
}