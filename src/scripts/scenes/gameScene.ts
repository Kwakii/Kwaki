import { Zone } from '../objects/Jeu/cible'
import ScoreText from '../objects/scoreText'

export default class GameScene extends Phaser.Scene {
  //Propriétés
  _Zones: Array<Zone>

  _Score: ScoreText
  _ScoreInt: number

  _Timer: Phaser.Time.TimerEvent
  constructor() {
    super({ key: 'GameScene' })
  }

  create() {
    //On crée les zones
    this._Zones = new Array<Zone>()
    this._Zones.push(new Zone(this, 'Haut'))
    this._Zones.push(new Zone(this, 'Bas'))
    this._Zones.push(new Zone(this, 'Gauche'))
    this._Zones.push(new Zone(this, 'Droite'))

    //Texte de score:
    this._Score = new ScoreText(this)
    this._ScoreInt = 0

    this._Timer = this.time.addEvent({ loop: true })    
  }

  update() {
    console.log(this.TempsEcoule());
    if (this.TempsEcoule() < 60) {
      let possedeUneActive: boolean = false
      let possedeUneSuivante: boolean = false

      let zoneSuivante
      this._Zones.forEach(zone => {
        zone.update()
        if (zone.EstActive) {
          possedeUneActive = true
        } else if (zone.EstSuivante) {
          zoneSuivante = zone
        }
      })

      if (!possedeUneActive) {
        //On prend la suivante et on définit une suivante
        if (zoneSuivante != null) {
          ;(<Zone>zoneSuivante).RendreActive()

          //Rendre une zone suivante
          let random = Phaser.Math.Between(0, 3)
          this._Zones[random].RendreSuivante()
        } else {
          //Si il n'y a pas de suivante: Une random en active et en suivante
          console.log('Zone suivante null')
          let random = Phaser.Math.Between(0, 3)
          this._Zones[random].RendreActive()

          random = Phaser.Math.Between(0, 3)
          this._Zones[random].RendreSuivante()
        
        }
      }
      this._Score.update(this._ScoreInt, this.TempsEcoule().toString())
    } else {
      this._Score.update(this._ScoreInt, 'Terminé')
    }
    
  }

  private TempsEcoule() {    
    return Math.floor(this._Timer.elapsed / 1000)
  }
}
