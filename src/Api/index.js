import { ALL_POKEMON, POKEMON_SPECIES } from './EndPoints'

export default class Api {
  static allPokemons () {
    return { 
      endPoint: ALL_POKEMON,
      method: 'GET'
    }
  }

  static pokemonSpecies (id) {
    return { 
      endPoint: `${POKEMON_SPECIES}${id}`,
      method: 'GET'
    }
  }

  static evoluationChain (url) {
    return { 
      endPoint: url,
      method: 'GET'
    }
  }

  static request ({endPoint, method}) {
    return fetch(endPoint, { 
      method,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json()
    })
    .catch(error => console.error('Error:', error))
  }
}
