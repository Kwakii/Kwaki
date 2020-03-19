export default class ScoreText extends Phaser.GameObjects.Text {
    constructor(scene: Phaser.Scene) {
      super(scene, 300, 400, '', { color: 'black', fontSize: '28px' })
      scene.add.existing(this)
      this.setOrigin(0)
    }
  
    public update(score: number, temps: string) {
      this.setText(`Score: ${score}   ${temps}`)
    }
  }
  