import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assests/avatar1.jpg'
import AVATAR2 from '../../assests/avatar2.jpg'
import AVATAR3 from '../../assests/avatar3.jpg'
import AVATAR4 from '../../assests/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="" />
          </div>

          <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vitae architecto animi et, earum consequuntur fugit debitis aspernatur nostrum quisquam nemo suscipit, mollitia molestiae id nisi error? Eum, odio eos.
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials;