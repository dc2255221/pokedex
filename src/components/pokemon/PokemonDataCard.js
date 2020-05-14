import React from 'react';
import {TYPE_COLORS} from '../../constants/typeColors';
import { ProgressBar } from './ProgressBar';

export const PokemonDataCard = ({pokemonIndex, types, imageUrl, name, stats}) => {
    return (
    <div className="col">
        <div className="card">
            <PokemonDataCardHeader pokemonIndex={pokemonIndex} types={types}/>
            <PokemonDataCardBody imageUrl={imageUrl} name={name} stats={stats}/>
        </div>
    </div>
    )
}

const PokemonDataCardHeader = ({pokemonIndex, types}) => {
    return (
    <div className="card-header">
        <div className="row">
            <div className="col-5">
                <h5>{pokemonIndex}</h5>
            </div>
            <div className="col-7">
                <div className="float-right">
                    {types.map(type => (
                        <span
                            key={type}
                            className="badge badge-primary badge-pill mr-1"
                            style={{
                                backgroundColor: `${TYPE_COLORS[type]}`,
                                color: 'white'
                            }}> 
                        {type.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join('')}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
} 

const PokemonDataCardBody = ({imageUrl, name, stats}) => {
    return (
        <div className="card-body">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <img 
                        src={imageUrl}
                        className="card-img-top rounded mx-auto mt-2">    
                    </img>
                </div>
                <div className="col-md-9">
                    <h4 className="mx-auto">
                        {name
                            .toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}
                    </h4>
                    { Object.keys(stats).map( stat => (
                        <ProgressBar statName={stat} statNum={stats[stat]}/> ))}
                </div>               
            </div>
        </div>
    )
}

