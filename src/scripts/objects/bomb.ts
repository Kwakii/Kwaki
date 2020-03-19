export class Bomb extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene,  x: number, y: number) {
      super (scene, x, y, 'bomb')

      scene.add.existing(this)
      scene.physics.add.existing(this)         

      this.setCollideWorldBounds(true)
      this.setBounce(0.9,0.9);
      this.setVelocity(2500,2500);
    }
}