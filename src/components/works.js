import { animateSpritesheetOnCanvasElem } from '../lib/animation'
import computerSpritesheet from '../assets/spritesheets/computer.png'
import applicationSpritesheet from '../assets/spritesheets/application.png'
import responsiveSpritesheet from '../assets/spritesheets/responsive.png'
import '../styles/works.scss'

const createWorkItem = (
  parent,
  content,
  canvasId,
  spritesheet,
  width,
  height,
  frames,
  delay,
  delayAnim
) => {
  const workItem = document.createElement('div')
  workItem.className = 'works__item'

  const canvas = document.createElement('canvas')
  canvas.id = canvasId
  workItem.appendChild(canvas)

  const text = document.createElement('p')
  text.className = 'works__text'
  text.textContent = content
  workItem.appendChild(text)

  parent.appendChild(workItem)

  animateSpritesheetOnCanvasElem(canvas, spritesheet, width, height, frames, delay, delayAnim)
}

const setupWorks = (root) => {
  const works = document.createElement('section')
  works.id = 'works'
  works.className = 'works'

  const heading = document.createElement('h1')
  heading.className = 'heading'
  heading.textContent = 'What do I do?'
  works.appendChild(heading)

  const workList = document.createElement('div')
  workList.className = 'works__list'
  works.append(workList)

  createWorkItem(
    workList,
    'I turn the lines of code into modern web applications with only my keyboard (and sometimes my mouse, I guess).',
    'computer',
    computerSpritesheet,
    402,
    304,
    45,
    150,
    300
  )
  createWorkItem(
    workList,
    'I build interactive user interfaces with latest technologies. I always keep track of the cutting-edge Front-end frameworks.',
    'application',
    applicationSpritesheet,
    192,
    151,
    40,
    100,
    400
  )
  createWorkItem(
    workList,
    'My apps can run on most of devices with responsive design.',
    'responsive',
    responsiveSpritesheet,
    192,
    151,
    87,
    100,
    600
  )

  root.appendChild(works)
}

export default setupWorks
