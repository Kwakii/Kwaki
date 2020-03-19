import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import { LogoDeux } from '../objects/logo'
import Plateforme from '../objects/plateforme'
import Player from '../objects/player'
import { Star } from '../objects/star'
import ScoreText from '../objects/scoreText'
import { GameObjects } from 'phaser'
import { Bomb } from '../objects/bomb'

export default class MainScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text

  player: Player;

  score: number;
  scoreText: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {    
    //BackGround
    this.score = 0;
    this.add.image(0,0,'sky').setOrigin(0,0);
    this.add.image(400,300,'star');
    //Objet Fps
    //this.fpsText = new FpsText(this)
    this.scoreText = new ScoreText(this);


    let plateformes = new Array<Plateforme>();
    //RefreshBody permet d'indiquer au moteur que l'on a changé l'objet static et qu'il est à recalculer
    plateformes.push(new Plateforme(this,400,568).setScale(2).refreshBody());    
    plateformes.push(new Plateforme(this,600,400));
    plateformes.push(new Plateforme(this,50,250));
    plateformes.push(new Plateforme(this,750,220));

    this.player = new Player(this, 350,200);       
    //console.log(player);
    this.physics.add.collider(this.player, plateformes); 
    
    
    //Passer par des Group
    let stars = new Array<Star>();    
    for (let i = 0; i < 12; i++) {
      stars.push(new Star(this, i * 70, 0));
    }        
    
    this.physics.add.collider(stars,plateformes);
    this.physics.add.overlap(this.player, stars, this.CollectStar,undefined, this);

    //let bomb = new Bomb(this,200,200);
    //this.physics.add.collider(this.player, bomb ,this.player.CollisionBombe, undefined, this);
    /* 
    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(1, 0)
      */
  }

  update() {
    //this.fpsText.update()
    this.scoreText.update(this.score);
    console.log('update');
    this.player.update();
  }

  public CollectStar(player: GameObjects.GameObject, star: GameObjects.GameObject) {
    (<Star>star).disableBody(true,true);    
    this.score += 10;     
  }

  private AddGroup() {
    let groupe = this.add.group({
      classType: Star,      
    })

    groupe.create();

  }


}
