import { animateSpritesheetOnCanvasElem } from '../lib/animation'
import logoSpritesheet from '../assets/spritesheets/logo.png'
import '../styles/header.scss'

const setupHeader = (root) => {
  const header = document.createElement('header')
  header.className = 'header'
  const logo = document.createElement('canvas')
  logo.id = 'logo'
  header.appendChild(logo)

  const nav = document.createElement('nav')
  nav.className = 'header__nav'
  nav.innerHTML = `<ul class="header__list">
    <li><a href="#about" class="header__link">About</a></li>
    <li><a href="#works" class="header__link">Works</a></li>
    <li><a href="#projects" class="header__link">Projects</a></li>
    <li><a href="#contact" class="header__link">Blog</a></li>
  </ul>`
  header.appendChild(nav)
  root.appendChild(header)

  animateSpritesheetOnCanvasElem(logo, logoSpritesheet, 20, 20, 14, 100, 8000)
}

export default setupHeader
