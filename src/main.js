//import setupLoading from './components/loading'
import setupHeader from './components/header'
import setupHero from './components/hero'
import setupAbout from './components/about'
import setupWorks from './components/works'

import './styles/global.scss'

const root = document.getElementById('root')
// setupLoading()
setupHeader(root)
setupHero(root)
setupAbout(root)
setupWorks(root)
