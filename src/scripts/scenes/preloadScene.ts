export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {    

    //Chargement des images
    this.load.image('sky', 'assets/img/sky.png');
    this.load.image('ground', 'assets/img/platform.png');
    this.load.image('star', 'assets/img/star.png');
    this.load.image('bomb', 'assets/img/bomb.png');  
    //Chargement du sprite
    this.load.spritesheet('dude','assets/img/dude.png',{ frameWidth: 32, frameHeight: 48 });


    //Nouveaux sprites
    this.load.image('background', 'assets/img/black_background.png');
    this.load.image('logo', 'assets/img/phaser-logo.png')
    this.load.spritesheet('poisonball', 'assets/img/Poisonball_65x9.png', {frameWidth: 65, frameHeight: 9});
    this.load.spritesheet('chevalier', 'assets/img/knight_idle.png', {frameWidth:64, frameHeight: 64});

  }

  create() {
    //this.scene.start('MainScene')    
    this.scene.start('GameScene')    

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
