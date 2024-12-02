import { useEffect, useState } from 'react'
import './modal.scss'

export const Modal = ({ title, img, color, children }) => {
  const [showModal, setShowModal] = useState(false);

  const keydownHandler = e => {
    if (e.keyCode === 27) setShowModal(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
  }, [])

  return (
    <div className='modal-component'>
      <a className="thumbnail" onClick={ () => setShowModal(true) }>
        <img src={img} role="presentation"/>
      </a>
      {showModal && (
        <div className={`modal-overlay ${color}`} onClick={ () => setShowModal(false) }>
          <div className={`modal ${color}`} onClick={e => e.stopPropagation()}>
            <div className={`left-panel ${color}`}>
              <img src={img} role="presentation" />
            </div>
            <div className="right-panel">
              <a className={`modal-close ${color}`} onClick={ () => setShowModal(false) }>
                <svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet">
                  <g>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </g>
                </svg>
              </a>
              <h1 className={color}>{title}</h1>
              { children }
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
