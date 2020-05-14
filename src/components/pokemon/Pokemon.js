import React, { Component } from 'react';
import axios from 'axios';
import { PokemonDataCard } from './PokemonDataCard';

export default class Pokemon extends Component {
    state = {
        name: '',
        pokemonIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        stats: {
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            specialAttack: '',
            specialDefense: ''
        },
        typeEffectiveness: {
            normal: 1,
            fighting: 1,
            flying: 1,
            bug: 1,
            ghost: 1,
            water: 1,
            grass: 1,
            psychic: 1,
            dark: 1,
            ice: 1,
            dragon: 1,
            fairy: 1,
            ground: 1,
            electric: 1,
            poison: 1,
            rock: 1,
            fire: 1
        },
        height: '',
        weight: '',
        eggGroups: '',
        abilities: '',
        genderRatioMale: '',
        genderRatioFemale: '',
        evs: '',
        hatchSteps: ''
    };

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params; 
        
        // Urls for pokemon information
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

        // Get pokemon information
        const pokemonRes = await axios.get(pokemonUrl);

        const name = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_default;

        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';
    
        pokemonRes.data.stats.map( stat => {
            switch (stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
            }
        });

        // Convert Decimeters to Feet
        const height = Math.round((pokemonRes.data.height * 0.32084 + 0.0001) * 100) / 100;

        // Convert to lbs
        const weight = Math.round((pokemonRes.data.weight * 0.220462 + 0.0001) * 100) / 100;

        const types = pokemonRes.data.types.map(type => type.type.name);

        // this.state.typeEffectiveness.forEach((item, key) => {item = 1});
        let { normal, fighting, flying, bug, ghost, steel, water, grass, psychic, dark, ice, dragon, fairy, ground, electric, rock, poison, fire } = this.state.typeEffectiveness;

        pokemonRes.data.types.map(type => {
            switch (type.type.name) {
                case 'normal':
                    fighting *= 2;
                    ghost *= 0;
                    break;
                case 'fighting': 
                    flying *= 2;
                    rock *= 1/2;
                    bug *= 1/2;
                    psychic *= 2;
                    dark *= 1/2;
                    fairy *= 2;
                    break;
                case 'flying':
                    fighting *= 1/2;
                    ground *= 0;
                    rock *= 2;
                    bug *= 1/2;
                    grass *= 1/2;
                    electric *= 2;
                    ice *= 2;
                    break;
                case 'poison':
                    fighting *= 1/2;
                    poison *= 1/2;
                    ground *= 2;
                    bug *= 1/2;
                    grass *= 1/2;
                    psychic *= 2;
                    fairy *= 1/2;
                    break;
                case 'ground':
                    poison *= 1/2;
                    rock *= 1/2;
                    water *= 2;
                    grass *= 2;
                    electric *= 0;
                    ice *= 2;
                    break;
                case 'rock':
                    normal *= 1/2;
                    fighting *= 2;
                    flying *= 1/2;
                    poison *= 1/2;
                    ground *= 2;
                    steel *= 2;
                    fire *= 1/2;
                    water *= 2;
                    grass *= 2;
                    break;
                case 'bug':
                    fighting *= 1/2;
                    flying *= 2;
                    ground *= 1/2;
                    rock *= 2;
                    fire *= 2;
                    grass *= 1/2;
                    electric *= 2;
                    break;
                case 'ghost':
                    normal *= 0;
                    fighting *= 0;
                    poison *= 1/2;
                    bug *= 1/2;
                    ghost *= 2;
                    dark *= 2;
                    break;
                case 'steel':
                    normal *= 1/2;
                    fighting *= 2;
                    flying *= 1/2;
                    poison *= 0;
                    ground *= 2;
                    rock *= 1/2;
                    bug *= 1/2;
                    steel *= 1/2;
                    fire *= 2;
                    grass *= 1/2;
                    psychic *= 1/2;
                    ice *= 1/2;
                    dragon *= 1/2;
                    fairy *= 1/2;
                    break;
                case 'fire':
                    ground *= 2;
                    rock *= 2;
                    bug *= 1/2;
                    steel *= 1/2;
                    fire *= 1/2;
                    water *= 2;
                    grass *= 1/2;
                    ice *= 1/2;
                    fairy *= 1/2;
                    break;
                case 'water':
                    steel *= 1/2;
                    fire *= 1/2;
                    water *= 1/2;
                    grass *= 2;
                    electric *= 2;
                    ice *= 1/2;
                    break;
                case 'grass':
                    flying *= 2;
                    poison *= 2;
                    ground *= 1/2;
                    bug *= 2;
                    fire *= 2;
                    water *= 1/2;
                    grass *= 1/2;
                    electric *= 1/2;
                    ice *= 2;
                    break;
                case 'electric':
                    flying *= 1/2;
                    ground *= 2;
                    steel *= 1/2;
                    electric *= 1/2;
                    break;
                case 'psychic':
                    fighting *= 1/2;
                    bug *= 2;
                    ghost *= 2;
                    psychic *= 1/2;
                    dark *= 2;
                    break;
                case 'ice':
                    fighting *= 2;
                    rock *= 2;
                    steel *= 2;
                    fire *= 2;
                    ice *= 1/2;
                    break;
                case 'dragon':
                    fire *= 1/2;
                    water *= 1/2;
                    grass *= 1/2;
                    electric *= 1/2;
                    ice *= 2;
                    dragon *= 2;
                    fairy *= 2;
                    break;
                case 'dark':
                    fighting *= 2;
                    bug *= 2;
                    ghost *= 1/2;
                    psychic *= 0;
                    dark *= 0.5;
                    fairy *= 2;
                    break;
                case 'fairy':
                    dark *= 1/2;
                    poison *= 2;
                    bug *= 1/2;
                    steel *= 2;
                    dragon *= 0;
                    dark *= 1/2;
                    break;
            }
        });

        const abilities = pokemonRes.data.abilities.map(ability => { 
            ability.ability.name
                .toLowerCase()
                .split('-')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
        });

        const evs = pokemonRes.data.stats.filter(stat => {
            if (stat.effort > 0) {
                return true;
            }
            return false;
        }).map( stat => {
            return `${stat.effort} ${stat.stat.name}`
                .toLowerCase()
                .split('-')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join((' '));
        })

        // Get Pokemon Description, Catch Rate, EggGroups, Gender Ratio, Hatch Steps
        await axios.get(pokemonSpeciesUrl)
            .then(res => {
                let description = '';
                res.data.flavor_text_entries.some(flavor => {
                    if (flavor.language.name === 'en') {
                        description = flavor.flavor_text;
                        return;
                    }
                });
                const femaleRate = res.data['gender_rate'];
                const genderRatioFemale = 12.5 * femaleRate;
                const genderRatioMale = 12.5 * (8 - femaleRate);

                const catchRate = Math.round((100 / 255) * res.data['capture_rate']);

                const eggGroups = res.data['egg_groups'].map(group => {
                    return group.name
                        .toLowerCase()
                        .split('-')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join((' '));
                }).join(', ');

                const hatchSteps = 255 * (res.data['hatch_counter'] + 1);

                this.setState({
                    description,
                    genderRatioFemale,
                    genderRatioMale,
                    catchRate,
                    eggGroups,
                    hatchSteps
                })
            });

            this.setState({
                imageUrl,
                pokemonIndex,
                name,
                types,
                stats: {
                    hp,
                    attack,
                    defense,
                    speed,
                    specialAttack,
                    specialDefense,
                },
                typeEffectiveness: {
                    normal,
                    fighting,
                    flying,
                    bug,
                    ghost,
                    water,
                    grass,
                    psychic,
                    dark,
                    ice,
                    dragon,
                    fairy,
                    ground,
                    electric,
                    poison,
                    rock,
                    fire
                },
                height,
                weight,
                abilities,
                evs
            });

    }

    render() {
        const {pokemonIndex, types, imageUrl, name, stats } = this.state;
        return (
            <PokemonDataCard 
                pokemonIndex={pokemonIndex} 
                types={types} 
                imageUrl={imageUrl} 
                name={name} 
                stats={stats}
            />
        )
    }
}
