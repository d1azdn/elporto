import { useState } from 'react'
import Navbar from './components/navbar'

import About from './pages/about'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {

  return (
    <>
    <Navbar/>
      <Contact/>
    </>
  )
}
