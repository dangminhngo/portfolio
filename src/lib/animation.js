import Typed from 'typed.js'

export const animateSpritesheetOnCanvasElem = (
  canvas,
  src,
  width,
  height,
  numOfFrames,
  delayFrame,
  delayAnimation
) => {
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height

  const spritesheet = new Image()
  spritesheet.src = src

  let start = Date.now(),
    end = start

  const animate = () => {
    const index = Math.floor((end - start) / delayFrame)
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(spritesheet, 0, index * height, width, height, 0, 0, width, height)
    requestAnimationFrame(animate)
    if (index > numOfFrames - 1) {
      end = start = Date.now()
      return
    }

    end = Date.now()
  }
  console.log(delayAnimation)

  animate()
}

export const createTypingAnimation = (elem, strings, speed) => {
  const typed = new Typed(elem, {
    strings,
    typeSpeed: speed,
    loop: true,
    backDelay: 2000,
    backSpeed: Math.floor(speed / 4),
  })

  return typed
}
