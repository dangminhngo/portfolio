import setupCursor from './components/cursor'
// import setupLoading from './components/loading'
import setupHeader from './components/header'
import setupHero from './components/hero'
import setupAbout from './components/about'
import setupWorks from './components/works'
import setupProjects from './components/projects'

import './styles/global.scss'

const root = document.getElementById('root')
setupCursor()
// setupLoading()
setupHeader(root)
setupHero(root)
setupAbout(root)
setupWorks(root)
setupProjects(root)
