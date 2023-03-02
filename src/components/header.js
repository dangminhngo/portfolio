import logoSrc from '../assets/spritesheets/logo.png'

const setupHeader = (root) => {
  const header = document.createElement('header')
  header.className = 'header'
  const logo = document.createElement('img')
  logo.src = logoSrc
  logo.className = 'header__logo'
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
}

export default setupHeader
