import React, { Component } from 'react'
import './style.css'
import pokemonBall from '../assets/images/pokemon-ball.png'
import pokemonLabel from '../assets/images/pokemon-label.svg'

export default class Intro extends Component {
  constructor(props) {
    super(props)
  }

  closeIntro = () => {
    setTimeout(() => {
      this.props.onClose()
    }, 600)
  }
  
  render () {
    return (
      this.props.show ? 
        <div className='pokemon-app-intro'>
          <input className='pokemon-app-intro_trigger' type='checkbox' id='ball' />
          <div className='pokemon-app-intro__images-wrapper'>
            <label htmlFor='ball'>
              <img 
              className='pokemon-app-intro_images-wrapper__ball' 
              src={pokemonBall} alt='pokemon ball'
              onClick={this.closeIntro}
              />
              <img 
              className='pokemon-app-intro_images-wrapper__label'
              src={pokemonLabel} alt='pokemon label'
              />
            </label>
          </div>
        <div className='pokemon-app-intro__left-slide'></div>
        <div className='pokemon-app-intro__right-slide'></div>
      </div> : null
    )
  }
}