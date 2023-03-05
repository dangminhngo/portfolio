import { calculateAge } from '../lib/utils'
import avatar from '../assets/spritesheets/avatar.png'
import '../styles/about.scss'

const setupAbout = (root) => {
  const about = document.createElement('section')
  about.id = 'about'
  about.className = 'about'

  const container = document.createElement('div')
  container.className = 'about__container'
  about.appendChild(container)

  const heading = document.createElement('h1')
  heading.className = 'heading'
  heading.textContent = 'Get to know me'
  container.appendChild(heading)

  const picture = document.createElement('img')
  picture.src = avatar
  picture.className = 'about__picture'
  container.appendChild(picture)

  const introduction = document.createElement('div')
  introduction.className = 'about__intro'
  introduction.innerHTML = `<p>
    I am a ${calculateAge(1996, 7, 13)} year-old Front-end Developer.
    I've taught myself all about programming as well as Web Development since 2021.
    I'm passionated about building cool stuff.</p>
  <p>
    My hometown is Go Cong Tay, a peaceful countryside with very large paddy fields, that located at Tien Giang, Vietnam.
    Currently, I am living and working in Ho Chi Minh, the largest city in the country.
  </p>
  <p>
    I am looking for new job as an entry-level Front-end Developer.
  </p>
  <p class="highlight">Great to know you!</p>`

  container.appendChild(introduction)

  root.appendChild(about)
}

export default setupAbout
