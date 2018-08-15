import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import PokemonsList from './Components/PokemonsList'
import Pokemon from 'pokemon-images'
import Api from './Api'
import Intro from './Intro'
import PokemonSpecies from './Components/PokemonSpecies'
import AppHeader from './Components/AppHeader';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allPokemons: [],
      showIntro: true,
      searchResult: [],
      searchPhrase: ''
    }
  }

  componentDidMount () {
    Api.request(Api.allPokemons())
    .then(response => {
      const pokemonsWithImages = response.results
      .map(pokemon => Object.assign(pokemon, {image: Pokemon.getSprite(pokemon.name)}))
      this.setState({
        allPokemons: pokemonsWithImages
      })
    })
  }

  filterResult = (e) => {
    const { value } = e.target
    console.log('filter', value)
    const searchResult = this.state.allPokemons.filter(item => item.name.indexOf(value) > -1)
    this.setState({
      searchResult: searchResult,
      searchPhrase: value
    })
  }

  closeIntro = () => {
    this.setState({
      showIntro: false
    })
  }

  render() {
    const { allPokemons, searchResult, searchPhrase } = this.state
    const pokemonList = searchPhrase.length > 0 ? searchResult : allPokemons
    return (
      <div className='pokemon-app'>
        <Intro onClose={this.closeIntro} show={this.state.showIntro}/>
        <AppHeader logo={logo} headline='pokemon' onSearch={this.filterResult}/>
        <Route path='/' render={(props)=> <PokemonsList {...props} list={pokemonList}/>} exact/>
        <Route path='/pokemon-species/:id' component={PokemonSpecies} exact />
      </div>
    )
  }
}

export default App
