import GameScene from "../../scenes/gameScene"

export class Zone extends Phaser.Physics.Arcade.Sprite {
  _position: String
  _scene: GameScene;

  public EstActive: boolean
  public EstSuivante: boolean

  constructor(scene: GameScene, position: string) {

    let sprite = 'chevalier';
    if (position == 'Haut') {
      super(scene, 400, 100, 'sprite')
    } else if (position == 'Bas') {
      super(scene, 400, 700, sprite)
    } else if (position == 'Gauche') {
      super(scene, 100, 400, sprite)
    } else if (position == 'Droite') {
      super(scene, 700, 400, sprite)
    }
    this._position = position
    this.visible = false
    this.EstActive = false
    this.EstSuivante = false

    this._scene = scene;
    scene.add.existing(this);

    this.animer();
    //scene.physics.add.existing(this);
  }

  public update() {
    let cursors = this.scene.input.keyboard.createCursorKeys()
    if (cursors.up != null) {
        console.log(cursors.up.repeats);
    }

    //Anti-Cheat
    let nbTouchesPresses = 0;
    if (cursors.up?.isDown) {
        nbTouchesPresses++;
    } 
    if (cursors.down?.isDown) {
        nbTouchesPresses++;
    }
    if (cursors.left?.isDown) {
        nbTouchesPresses++;    
    }
    if (cursors.right?.isDown) {
        nbTouchesPresses++;
    }

if (nbTouchesPresses == 0 || nbTouchesPresses == 1) {
    if (this.EstActive) {
      this.visible = true
      this.alpha = 1
      if (this._position == 'Haut' && cursors.up?.isDown && cursors.up.repeats == 1) {
        this.DesactiverActive();
        cursors.up.reset();
      } else if (this._position == 'Bas' && cursors.down?.isDown && cursors.down.repeats == 1) {
        this.DesactiverActive();
        cursors.down.reset();
      } else if (this._position == 'Gauche' && cursors.left?.isDown && cursors.left.repeats == 1) {
        this.DesactiverActive();
        cursors.left.reset();
      } else if (this._position == 'Droite' && cursors.right?.isDown && cursors.right.repeats == 1) {
        this.DesactiverActive();
        cursors.right.reset();
      }
    } else {
      this.visible = false
      if (this.EstSuivante) {
        this.visible = true
        this.alpha = 0.3
      }
    }
  }
}

  public RendreActive() {
    this.EstActive = true
    this.EstSuivante = false
    console.log('Est active')
  }

  public DesactiverActive() {
      this.EstActive = false;
      this._scene._ScoreInt++;
  }
 
  public RendreSuivante() {
    this.EstSuivante = true
    console.log('Est Suivante')
  }


  private animer() {
    this._scene.anims.create({
      key: 'chevalier_idle',
      frames: this._scene.anims.generateFrameNumbers('chevalier', {start: 0, end: 20} ),
      frameRate: 10,
      repeat: -1
    })

    this.anims.play('chevalier_idle', true);
  }
}

