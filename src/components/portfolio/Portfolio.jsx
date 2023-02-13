import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">GitHub</a>
            <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio