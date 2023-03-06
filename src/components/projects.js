import block from '../assets/images/block.png'
import darkomaLogo from '../assets/images/cursor.png'
import '../styles/projects.scss'

const addProjects = (list, projects) => {
  projects.forEach(({ name, logo }) => {
    const projectItem = document.createElement('div')
    projectItem.className = 'projects__item'

    const images = document.createElement('div')
    images.className = 'projects__images'
    projectItem.appendChild(images)

    const logoElem = document.createElement('img')
    logoElem.src = logo
    logoElem.className = 'projects__logo'
    images.appendChild(logoElem)

    const blockElem = document.createElement('img')
    blockElem.src = block
    blockElem.className = 'projects__block'
    images.appendChild(blockElem)

    const nameElem = document.createElement('h3')
    nameElem.className = 'projects__name'
    nameElem.textContent = name
    projectItem.appendChild(nameElem)

    list.appendChild(projectItem)
  })
}

const setupProjects = (root) => {
  const projects = document.createElement('section')
  projects.id = 'projects'
  projects.className = 'projects'

  const container = document.createElement('div')
  container.className = 'projects__container'
  projects.appendChild(container)

  const heading = document.createElement('h1')
  heading.className = 'heading'
  heading.textContent = 'The Things I Built'
  container.appendChild(heading)

  const list = document.createElement('div')
  list.className = 'projects__list'
  container.appendChild(list)

  addProjects(list, [
    {
      name: 'Darkoma',
      logo: darkomaLogo,
      summary: 'A colorscheme supports a variety of plugins for Neovim 0.7+',
    },
    {
      name: 'Darkoma',
      logo: darkomaLogo,
      summary: 'A colorscheme supports a variety of plugins for Neovim 0.7+',
    },
    {
      name: 'Darkoma',
      logo: darkomaLogo,
      summary: 'A colorscheme supports a variety of plugins for Neovim 0.7+',
    },
    {
      name: 'Darkoma',
      logo: darkomaLogo,
      summary: 'A colorscheme supports a variety of plugins for Neovim 0.7+',
    },
    {
      name: 'Darkoma',
      logo: darkomaLogo,
      summary: 'A colorscheme supports a variety of plugins for Neovim 0.7+',
    },
    {
      name: 'Darkoma',
      logo: darkomaLogo,
      summary: 'A colorscheme supports a variety of plugins for Neovim 0.7+',
    },
  ])

  root.appendChild(projects)
}

export default setupProjects
