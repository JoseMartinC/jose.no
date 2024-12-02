import Modal from '../Components/Modal'

import newstore from '../Assets/images/newstore-logo.png'
import data from '../Data/work.json'

export const Work = () => {
  return (
    <Modal img={newstore} color="red" title="experience">
      {
        data.works.map(work => (
          <div className="experience" key={work.company}>
            <div>
              <h2><a href={ work.url } target="_blank">{ work.company }</a></h2>
              { work.role }
            </div>
            <div className='right'>
              <h2>{ work.place }</h2>
              { work.date }
            </div>
          </div>)
        )
      }
    </Modal>
  )
}
