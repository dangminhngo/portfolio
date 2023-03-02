import { animateSpritesheetOnCanvasElem } from '../lib/animation'
import computerSpritesheet from '../assets/spritesheets/computer.png'

import '../styles/hero.scss'

const setupHero = (root) => {
  const section = document.createElement('section')
  section.id = 'hero'
  section.className = 'hero'

  const text = document.createElement('h1')
  text.className = 'hero__title'
  text.innerHTML = 'Hey, I am <strong class="hero__name">Dang Minh Ngo</strong>.'
  section.appendChild(text)

  const canvas = document.createElement('canvas')
  canvas.id = 'computer'

  section.appendChild(canvas)
  root.appendChild(section)

  animateSpritesheetOnCanvasElem(canvas, computerSpritesheet, 402, 304, 0.1, 45)
}

export default setupHero
