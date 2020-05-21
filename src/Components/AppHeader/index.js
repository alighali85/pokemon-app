import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default ({logo, headline = 'Pokemon', onSearch = () => {}}) => (
  <header className='app-header'>
    <div className='app-header__logo-wrapper'> 
      <Link to={process.env.PUBLIC_URL + '/'}>
        <img src={logo} className='app-header__logo-wrapper__logo' alt='logo' />
      </Link>
      <h1 className='app-header__logo-wrapper__logo-title'>{headline || `Pokémon`}</h1>
    </div>
    <div className='app-header__search'>
     search: <input 
     className='app-header__search-input' 
     type='text' 
     onChange={e => onSearch(e)}
     placeholder= 'Find your Pokemon ...' 
     />
    </div>
  </header>
 )