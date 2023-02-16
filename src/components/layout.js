import React, { useState } from 'react'
import Navbar from './navbar'
import BottomNav from './bottomNav'
import './layout.scss'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="container-fluid p-0">
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-md-3 sticky">
            <Navbar />
          </div>
          <div className="col-md-9 scrollable-content">
            {children}
          </div>
        </div>
      </div>
      <div className="d-md-none">
        <div className="absolute-top">
        <p>Martyna Chojnacka <br></br>
    Web Developer | Creative Coder | Visual Artist</p>
          </div>
        <div className="fixed-bottom">
          <BottomNav isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu} />
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
    
        </div>
        <div className="scrollable-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
