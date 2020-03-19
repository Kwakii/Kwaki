import { GameObjects } from "phaser"

export default class Plateforme extends Phaser.Physics.Arcade.Sprite {



    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'ground')

        //On ajoute l'objet à la scene
        scene.add.existing(this)
        //Puis on le met dans le groupe des objets physique
        scene.physics.add.existing(this,true);

        
        
        //scene.add.existing(this)
        //scene.physics.add.existing(this)
      }
  }
  