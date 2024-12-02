import Modal from '../Components/Modal'

import html from '../Assets/images/html5-logo.png';
import data from '../Data/skills.json'

export const Skills = () => {
  return (
    <Modal img={html} color="black" title="latest skills">
      <p>{ data.text }</p>
      {
        data.skills.map(skill => (
          <div className="skill" key={ skill.title }>
            <h2>{ skill.title }</h2>
            <ul className="line">
              {
                skill.technologies.map(technology => <li key={ technology }>{ technology }</li>)
              }
            </ul>
          </div>
        ))
      }
    </Modal>
  )
}
