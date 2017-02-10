import React, { Component } from 'react';
import Modal from '../Components/Modal';

import html from '../../public/images/html5-logo.png';
import data from '../Data/skills.json'

class Skills extends Component {
  render () {
    let skills = data.skills.map((skill, index) => <div className="skill" key={ index }>
      <h2>{ skill.title }</h2>
      <ul className="line">
        { skill.technologies.map((technology, index) => <li key={ index }>{ technology }</li>) }
      </ul>
    </div>)
    return (
      <Modal img={html} color="black" title="skills">
        <p>{ data.text }</p>
        { skills }
      </Modal>
    )
  }
}

export default Skills;