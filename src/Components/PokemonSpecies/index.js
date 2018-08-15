import React, { Component } from 'react'
import PokemonsList from '../PokemonsList'
import Api from '../../Api'
import Pokemon from 'pokemon-images'
import { Link } from 'react-router-dom'
import './style.css'

export default class PokemonSpecies extends Component {
constructor(props) {
  super(props)
  this.state = {
    evoluationChainUrl: '',
    evoluationChain: null,
    pokemonName: null,
    pokemonId: null
  }
}

componentDidMount () {
  const { id } = this.props.match.params
  Api.request(Api.pokemonSpecies(id))
  .then(response => {
    this.setState({
      evoluationChainUrl: response.evolution_chain.url,
      pokemonName: response.name,
      pokemonId:response.id,
      evolutionChain: []
    })
  })
}

getEvoluationChain = (url) => {
  Api.request(Api.evoluationChain(url))
    .then(response => {
      let evolvesChain = []
      const evolves = response.chain.evolves_to
      evolves.forEach(element => {
        getR(element)
      })
      function getR (evoluationOption) {
        evolvesChain.push(evoluationOption.species)
        if (evoluationOption.evolves_to.length > 0) {
          getR(evoluationOption.evolves_to[0]) 
        } else return false
      }
      evolvesChain.map(pokemon => Object.assign(pokemon, {image: Pokemon.getSprite(pokemon.name)}))
      this.setState({
      evoluationChain: evolvesChain
      })
  })
}

render () {
  const { evoluationChainUrl, pokemonName, pokemonId, evoluationChain } = this.state
  const  pokemonImage = !!pokemonName && Pokemon.getSprite(pokemonName)
  return (
    pokemonImage ? <div>
      <div>
        <img src={pokemonImage} alt='pokemonName'/>
        <h4>{pokemonName}</h4>
        <button className='evoluation-button' onClick={() => this.getEvoluationChain(evoluationChainUrl)}>Show Evolution Chain</button>
      </div>
      <ol>
        {evoluationChain && <PokemonsList list={evoluationChain}/>}
      </ol>
    </div> : <h3>Loading ...</h3>
    )
  }
}