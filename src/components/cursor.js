import cursor from '../assets/images/cursor.png'
import '../styles/cursor.scss'

const setupCursor = () => {
  const cursorContainer = document.createElement('div')
  cursorContainer.className = 'cursor'
  const img = document.createElement('img')
  img.src = cursor
  img.className = 'cursor__img'
  cursorContainer.appendChild(img)
  document.body.appendChild(cursorContainer)

  window.addEventListener('mousemove', (e) => {
    cursorContainer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })
}

export default setupCursor
