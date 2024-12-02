import Modal from '../Components/Modal'

import upv from '../Assets/images/upv-logo.png'
import data from '../Data/education.json'

export const Education = () => (
  <Modal img={upv} color="orange" title="education">
    <h2>certifications</h2>
    {
      data.degrees.map((degree, index) => (
        <div className="line" key={index}>
          <h3>{ degree.title }</h3>
          <p>{ degree.description }</p>
        </div>
      ))
    }
    <h2>languages</h2>
    {
      data.languages.map((language, index) => (
        <div className="line" key={index}>
          <h3>{ language.name }</h3>, { language.text }
        </div>
      ))
    }
  </Modal>
)
