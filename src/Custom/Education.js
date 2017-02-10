import React, { Component } from 'react'
import Modal from '../Components/Modal'

import upv from '../../public/images/upv-logo.png'
import data from '../Data/education.json'

class Education extends Component {
  render () {
    let certifications = data.degrees.map((degree, index) => <div className="line" key={index}><h3>{ degree.title }</h3>&nbsp;{ degree.description }<br /><br /></div>)
    let languages = data.languages.map((language, index) => <div className="line" key={index}><h3>{ language.name }</h3>, { language.text }<br /><br /></div>)
    return (
      <Modal img={upv} color="red" title="education">
        <h2>Certifications</h2>
        { certifications }
        <h2>Languages</h2>
        { languages }
      </Modal>
    )
  }
}

export default Education;