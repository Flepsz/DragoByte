import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import MainHome from './components/MainHome/MainHome.jsx'

import './syles/Home.css'

function Home() {
  return (
    <div>
      <Header />
      <MainHome />
      <Footer />
    </div>
  )
}

export default Home