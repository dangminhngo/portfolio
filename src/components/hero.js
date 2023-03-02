import { animateSpritesheetOnCanvasElem } from '../lib/animation'
import computerSpritesheet from '../assets/spritesheets/computer.png'

const setupHero = (root) => {
  const section = document.createElement('section')
  section.id = 'hero'
  section.className = 'hero'

  const canvas = document.createElement('canvas')
  canvas.id = 'computer'

  section.appendChild(canvas)
  root.appendChild(section)

  animateSpritesheetOnCanvasElem(canvas, computerSpritesheet, 448, 360, 0.1, 26)
}

export default setupHero
