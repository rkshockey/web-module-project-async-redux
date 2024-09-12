import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchList, fetchPoke } from '../action/pokeActions'

import PokeCard from './PokeCard'

function PokeList (props) {

    useEffect(() => {
        props.fetchList()
    }, [])

    function handleClick (e){
        e.preventDefault()
        props.fetchPoke(props.selectedPokeUrl)
    }

    return (
        <div className='box'>
            <button onClick={handleClick}>FETCH SELECTED POKEMON</button>
            <div className='poke-list'>
                {props.isCallingList ? <p>Please wait while we fetch your data!</p> :
                props.errorList === '' ? props.pokeList.map((poke, i) => <PokeCard url={poke.url} key={i} />) : 
                <div>We've encountered an error: {props.errorList}</div> }
            </div>
        </div>
    )
}

function mapStateToProps (state){
    return ({
        pokeList: state.pokeList,
        isCallingList: state.isCallingList,
        errorList: state.errorList,
        selectedPoke: state.selectedPoke,
        selectedPokeUrl: state.selectedPokeUrl
    })
}

export default connect(mapStateToProps, { fetchList, fetchPoke })(PokeList)