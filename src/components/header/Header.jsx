import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assests/person1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Fidelis Tuwei</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header