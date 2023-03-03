import { animateSpritesheetOnCanvasElem, createTypingAnimation } from '../lib/animation'
import computerSpritesheet from '../assets/spritesheets/computer.png'
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

  const computerCanvas = document.createElement('canvas')
  computerCanvas.id = 'computer'
  section.appendChild(computerCanvas)

  const mouseCanvas = document.createElement('canvas')
  mouseCanvas.id = 'mouse'
  section.appendChild(mouseCanvas)

  root.appendChild(section)

  createTypingAnimation(
    document.getElementById('text'),
    [
      'Hey, my name is <strong class="hero__strong">Dang Minh Ngo</strong>.',
      'You can also call me <strong class="hero__strong">Jaime</strong>.',
      'I\'m a <strong class="hero__strong">Front-end Developer</strong>.',
      'I love drawing <strong class="hero__strong">pixel art</strong>.',
      'I live in <strong class="hero__strong">Ho Chi Minh, Vietnam</strong>.',
    ],
    80
  )
  animateSpritesheetOnCanvasElem(computerCanvas, computerSpritesheet, 402, 304, 45, 150, 3000)
  animateSpritesheetOnCanvasElem(mouseCanvas, mouseSpritesheet, 16, 24, 7, 250, 500)
}

export default setupHero
