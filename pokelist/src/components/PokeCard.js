import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { selectPoke } from '../action/pokeActions'

const initialPoke = {
    details: {
        sprites: {
            front_default: null
        },
        types: null
    }
}

function PokeCard (props) {
    const { url } = props
    const [pokemon, setPokemon] = useState(initialPoke)

    useEffect (() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    function handleClick (e){
        e.preventDefault()
        props.selectPoke(url)
    }

    if (pokemon === initialPoke){
        return <div>Loading...</div>
    }

    return (
        <div className={props.selectedPokeUrl === url ? 'poke-card selected' : 'poke-card'} onClick={handleClick}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h4>{pokemon.name}</h4>
            <p>Type: {pokemon.types.map((type, i) => {return <span key={i}>{type.type.name} </span>})}</p>
        </div>
    )
}

function mapStateToProps (state){
    return ({
        selectedPokeUrl: state.selectedPokeUrl
    })
}

export default connect(mapStateToProps, { selectPoke })(PokeCard)