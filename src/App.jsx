import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

import About from './pages/about'
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {

  const [page,setPage] = useState('Home')

  function renderPage(){
    switch(page){
      case 'Home' : return <Home/>;
      case 'About' : return <About/>;
      case 'Projects' : return <Projects/>;
      case 'Contact' : return <Contact/>;
    }
  }
  
  return (
    <>
    <div className="fixed h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="inset-0 absolute">
        <Navbar page={page} setPage={setPage}/>
        { renderPage() }
        <Footer/>
      </div>
    </>
  )
}
