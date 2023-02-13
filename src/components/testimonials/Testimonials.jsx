import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assests/avatar1.jpg'
import AVATAR2 from '../../assests/avatar2.jpg'
import AVATAR3 from '../../assests/avatar3.jpg'
import AVATAR4 from '../../assests/avatar4.jpg'

const data = [
  {
    avatar: AVATAR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vitae architecto animi et, earum consequuntur fugit debitis aspernatur nostrum quisquam nemo suscipit, mollitia molestiae id nisi error? Eum, odio eos."
  },
  {
    avatar: AVATAR2,
    name: "Shatta Wale",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vitae architecto animi et, earum consequuntur fugit debitis aspernatur nostrum quisquam nemo suscipit, mollitia molestiae id nisi error? Eum, odio eos."
  },
  {
    avatar: AVATAR3,
    name: "Kwame Despite",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vitae architecto animi et, earum consequuntur fugit debitis aspernatur nostrum quisquam nemo suscipit, mollitia molestiae id nisi error? Eum, odio eos."
  },
  {
    avatar: AVATAR4,
    name: "Nana Ama McBrown",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vitae architecto animi et, earum consequuntur fugit debitis aspernatur nostrum quisquam nemo suscipit, mollitia molestiae id nisi error? Eum, odio eos."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="" />
                  </div>

                  <h5 className="client__name">{name}</h5>
                    <small className="client__review">{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials;