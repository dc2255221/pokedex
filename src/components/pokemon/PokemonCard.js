import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visted,
    &:link,
    &:active {
        text-decoration: none;
    };
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    }

    componentDidMount() {
        const {name, url} = this.props.pokemon;
        const pokemonIndex = url.split("/")[url.split('/').length -2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

        this.setState({
            name, 
            pokemonIndex,
            imageUrl
        })
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                <div className="card">
                    <h5 className="card-header"> {this.state.pokemonIndex} </h5>
                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                        <img src={this.state.imageUrl} alt={this.state.name}></img>
                        <h1> {this.state.name.toLowerCase().split(' ').map( word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')} </h1>
                        </h6>
                    </div>
                </div>
                </StyledLink>
            </div>
        )
    }
}
