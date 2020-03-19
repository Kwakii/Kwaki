import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import GameScene from './scenes/gameScene'

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 800

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene,GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
      //gravity: { y: 300 }
    }  
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
