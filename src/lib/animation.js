export const animateSpritesheetOnCanvasElem = (canvas, src, width, height, speed, numOfFrames) => {
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height

  const spritesheet = new Image()
  spritesheet.src = src
  let frame = 0,
    gameFrame = 0

  const animate = () => {
    frame = Math.floor(gameFrame * speed)
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(spritesheet, 0, frame * height, width, height, 0, 0, width, height)
    requestAnimationFrame(animate)
    if (frame > numOfFrames - 1) {
      gameFrame = 0
      return
    }
    gameFrame++
  }

  animate()
}
