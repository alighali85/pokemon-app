import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default ({list, title = ''}) => {
  return (
    <div> 
      {list
        .map((pokemon, i) => <Link key={i} to={process.env.PUBLIC_URL + pokemon.url.slice(25)}>
          <div className='pokemon-list'>
          <img className='pokemon-list_image'
            key={pokemon.name} 
            src={pokemon.image} 
            alt={'pokemon item'} 
          />
          <p className='pokemon-list_name'>{pokemon.name}</p>
          </div>
        </Link>)
      }
    </div>
  )
} 