import Typed from 'typed.js'

const clamp = (value, min, max) => {
  if (value < min) return min
  if (value > max) return max
  return value
}

export const animateSpritesheetOnCanvasElem = (
  canvas,
  src,
  width,
  height,
  numOfFrames,
  delay,
  delayAnim
) => {
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height

  const spritesheet = new Image()
  spritesheet.src = src

  let start = Date.now(),
    end = start

  const animate = () => {
    const value = Math.floor((end - start) / delay)
    const index = clamp(value, 0, numOfFrames - 1)

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(spritesheet, 0, index * height, width, height, 0, 0, width, height)

    requestAnimationFrame(animate)

    if (value > numOfFrames - 1 + Math.ceil(delayAnim / delay)) {
      start = Date.now()
    }

    end = Date.now()
  }

  animate()
}

export const createTypingAnimation = (elem, strings, speed) => {
  const typed = new Typed(elem, {
    strings,
    typeSpeed: speed,
    loop: true,
    backDelay: 480,
    backSpeed: 0,
  })

  return typed
}
