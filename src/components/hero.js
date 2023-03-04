import { animateSpritesheetOnCanvasElem, createTypingAnimation } from '../lib/animation'
import keyboardSpritesheet from '../assets/spritesheets/keyboard.png'
import mouseSpritesheet from '../assets/spritesheets/mouse.png'

import '../styles/hero.scss'

const setupHero = (root) => {
  const section = document.createElement('section')
  section.id = 'hero'
  section.className = 'hero'

  const text = document.createElement('h1')
  text.className = 'hero__title'
  text.innerHTML = '<span id="text"></span>'
  section.appendChild(text)

  const keyboardCanvas = document.createElement('canvas')
  keyboardCanvas.id = 'keyboard'
  section.appendChild(keyboardCanvas)

  const mouseCanvas = document.createElement('canvas')
  mouseCanvas.id = 'mouse'
  section.appendChild(mouseCanvas)

  root.appendChild(section)

  createTypingAnimation(
    document.getElementById('text'),
    [
      'Hi, my name is <strong class="hero__strong">Dang Minh Ngo</strong>.',
      'You can also call me <strong class="hero__strong">Jaime</strong>.',
      'I\'m a <strong class="hero__strong">Front-end Developer</strong>.',
      'I love buiding <strong class="hero__strong">things</strong>.',
    ],
    80
  )
  animateSpritesheetOnCanvasElem(keyboardCanvas, keyboardSpritesheet, 352, 184, 122, 120, 0)
  animateSpritesheetOnCanvasElem(mouseCanvas, mouseSpritesheet, 16, 16, 5, 200, 600)
}

export default setupHero
