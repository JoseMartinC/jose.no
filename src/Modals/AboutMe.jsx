import Modal from '../Components/Modal'

import yo from '../Assets/images/yo.jpg'

export const AboutMe = () => {
  const ageDifMs = new Date() - new Date('07/10/1984')
  const ageDate = new Date(ageDifMs)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)

  return (
    <Modal img={yo} color="blue" title="about me">
      Hello there! My name is Jose Martin, a { age } years old Computer Science Engineer from Valencia in Spain. <br/><br/>
      I consider myself a passionate of computing in all the possible ways, from my first MSX 64K to my last MacBook Pro, but I've been truly focusing on web and mobile frontend development for more than 20 years.<br/><br/>
      Along with development, I love design, graphics, UX, 3D and industrial computing (matter where I made my intensification at the Polytechnic University of Valencia). AI, robotics, automatons, real-time systems, will always be exciting technologies for me.<br/><br/>
      My second lover is music. I spent a great part of my youth playing music as a DJ in my city, and despite I'm now quite outside the movement, I'm always eager to mix some vinyls in the city, where I have the good fortune to share space with many brilliant artists.<br/><br/>
      My brain is a hotbed of ideas on the daily life, growing constantly as I keep on learning, greatly propelled by the awesome technology context in which we are living... I would need at least 40-hours days to give love to the many hobbies and technologies I want to learn!<br/><br/>
      On a personal level, I'm an extrovert that loves to cry with laughter, travel and meet new people, overcome big challenges, the order and symmetry and, on top of everything, spend time with my family and friends.
    </Modal>
  )
}
