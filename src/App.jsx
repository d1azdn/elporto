import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

import About from './pages/about'
import Index from './pages/index'
import Projects from './pages/projects'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Index/>
    <Footer/>
    </>
  )
}
