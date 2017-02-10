import React, { Component } from 'react'
import Boron from 'boron/OutlineModal'

class Modal extends Component {
  showModal = () => {
    this.refs.modal.show()
  }
  hideModal = () => {
    this.refs.modal.hide()
  }
  render () {
    return (
      <div className="modalComponent">
        <a className="thumbnail" onClick={this.showModal}>
          <img src={this.props.img} role="presentation" />
        </a>
        <Boron className={'modal ' + this.props.color}  ref="modal" keyboard={ null } modalStyle={{ width: '600px' }}>
          <div className={'cardLeft ' + this.props.color}>
            <img src={this.props.img} role="presentation" />
          </div>
          <div className="cardRight">
            <a className={'closeButton ' + this.props.color} onClick={ this.hideModal }>
              <svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet">
                <g>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </g>
              </svg>
            </a>
            <h1 className={this.props.color}>{this.props.title}</h1>
            { this.props.children }
          </div>
        </Boron>
      </div>
    );
  }
}

export default Modal;