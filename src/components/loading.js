import { animateSpritesheetOnCanvasElem } from '../lib/animation'
import loadingSpritesheet from '../assets/spritesheets/loading.png'

import '../styles/loading.scss'

const setupLoading = () => {
  const overlay = document.createElement('div')
  overlay.className = 'loading'

  const canvas = document.createElement('canvas')
  canvas.id = 'loading'
  overlay.appendChild(canvas)

  const text = document.createElement('p')
  text.textContent = 'LOADING ... 0%'
  overlay.appendChild(text)
  document.body.appendChild(overlay)

  const screenTimeoutId = setTimeout(() => {
    overlay.classList.add('fading')
  }, 10000)

  let percentage = 0
  const percentageIntervalId = setInterval(() => {
    percentage += 10
    if (percentage >= 100) percentage = 100
    text.textContent = 'LOADING ... ' + percentage + '%'
  }, 800)

  overlay.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'transform') {
      clearTimeout(screenTimeoutId)
      clearInterval(percentageIntervalId)
      overlay.remove()
    }
  })

  animateSpritesheetOnCanvasElem(canvas, loadingSpritesheet, 256, 53, 60, 150, 300)
}

export default setupLoading
