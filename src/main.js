//import setupLoading from './components/loading'
import setupHero from './components/hero'
import setupHeader from './components/header'

import './styles/global.scss'

const root = document.getElementById('root')
// setupLoading()
setupHeader(root)
setupHero(root)
