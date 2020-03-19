export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'ground')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    /*
    this.setCollideWorldBounds(true)
      .setBounce(0.6,0.6)
      .setInteractive()
      .on('pointerdown', () => {        
        this.setVelocity(200,-400)
      })
    

      
      var particle = scene.add.particles('red')      
      var emitter = particle.createEmitter({
        speed: 200,
        scale: { start: 1, end: 0 },
        frequency: 200
      })
      emitter.startFollow(this)
      */
      
  }
}
