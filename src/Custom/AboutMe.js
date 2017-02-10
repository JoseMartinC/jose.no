import React, { Component } from 'react'
import Modal from '../Components/Modal'

import yo from '../../public/images/yo.jpg'

class AboutMe extends Component {
  render () {
    let age = new Date().getMonth() > 6 && new Date().getDate() >= 10
      ? new Date().getFullYear() - 1984
      : new Date().getFullYear() - 1984 - 1
    return (
      <Modal img={yo} color="blue" title="about me">
        Hello there! My name is Jose Martin, a { age } years old computer science engineer from Valencia who lives in Bergen since 2011. <br/><br/>
        I consider myself a passionate of computing in all the possible ways, from my first MSX 64K to my last MacBook Pro, but I've been truly focusing on the frontend web development within the past { new Date().getFullYear() - 2009 } years. <br/><br/>
        Along with web development, I love design, graphics, 3D and industrial computing (matter where I made my intensification at the Polytechnic University of Valencia). Robotics, automatons, CNC, real-time systems, will always be such an exciting technology for me. I'm a science men, and on science I base my lifestyle.<br/><br/>
        My second lover is music, concretely electronic. I spent a huge part of my youth playing as a DJ in my city, and despite I'm now quite outside the movement, I always have the huge need of putting myself on a DJ-both each time a go back to Spain, where I have the good fortune to share space and art with my friends. <br/><br/>
        My brain is a hotbed of ideas on the daily life, becoming stronger as I learn more, greatly propelled by the awesome technology context in which we are living... We need 40-hours days to get updated with the new technology releases! <br/><br/>
        On a personal level, I love to cry with laughter, travel Europe, meet new people, collect gadgets, challenges and hard things that become easy, the order and symmetry and, on top of everything, spend time with my family and friends.
      </Modal>
    )
  }
}

export default AboutMe;