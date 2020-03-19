import { Scene, GameObjects } from 'phaser'
import { Star } from './star'

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'dude')

    //On ajoute l'objet à la scene
    scene.add.existing(this)
    //On ajoute l'objet à la liste des objets physiques (= soumis à la gravité)
    scene.physics.add.existing(this)
    //Elasticité (rebond sur des surfaces)
    //this.setBounce(0.2)
    //Ne peut pas sortir de l'écran
    this.setCollideWorldBounds(true)

    //Il y a déjà une gravité par défaut mais on peut choisir par objet
    this.body.gravity.y = 300

    //Création des animations
    this.CreerAnimations(scene)
    this.anims.play('left', true)

    //scene.add.existing(this)
    //scene.physics.add.existing(this)
  }

  //Création des animations (A mettre dans une classe spéciale animations plus tard ?):
  private CreerAnimations(scene: Phaser.Scene) {
    scene.anims.create({
      key: 'left',
      frames: scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })

    scene.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    })

    scene.anims.create({
      key: 'right',
      frames: scene.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })
  }

  // Gère les collisions avec les autres objets
  private GererDeplacement(scene: Phaser.Scene) {
    let cursors = scene.input.keyboard.createCursorKeys()  



    //Si on appuie sur gauche ou droite: Définit une vélocité + on joue l'animation, sinon on le stoppe
    if (cursors.left?.isDown) {
      this.setVelocityX(-100)
      this.anims.play('left', true)
    } else if (cursors.right?.isDown) {
      this.setVelocityX(100)
      this.anims.play('right', true)
    } else {
      this.setVelocityX(0)
      this.anims.play('turn')
    }

    //Si touche Haut appuyé et le corps qui touche un autre objet par le bas, on peut jump
    if (cursors.up?.isDown && (this.body.touching.right || this.body.touching.down)) {
      this.setVelocityY(-500)
    }


    if (cursors.space?.isDown) {
      this.setVelocityX(2500);
      this.anims.play('left', true)
    }

  }

  public CollisionBombe(player: any, bomb: any) {
    ;(<Player>player).disableBody(true, true)
  }

  public update() {
    this.GererDeplacement(this.scene)
  }
}
