import React, { Component } from 'react'
import Modal from '../Components/Modal'

import vimond from '../../public/images/vimond.png'
import data from '../Data/work.json'

class Work extends Component {
  render () {
    let experiences = data.works.map((work, index) => <div className="experience" key={index}>
      <div className="column left">
        <h2><a href={ work.url } target="_blank">{ work.company }</a></h2>
        { work.role }
      </div>
      <div className="column right">
        <h2>{ work.place }</h2>
        { work.date }
      </div>
    </div>)
    return (
      <Modal img={vimond} color="orange" title="experience">
        { experiences }
      </Modal>
    )
  }
}

export default Work;