import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    state = {
        pokemon: null
    }
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000')
            .then( (res) => {
                console.log(res.data);
                this.setState({
                    pokemon: res.data['results']
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="row">
                {this.state.pokemon ? this.state.pokemon.map( pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.name}/>)) : ''}
            </div>
        )
    }
}
