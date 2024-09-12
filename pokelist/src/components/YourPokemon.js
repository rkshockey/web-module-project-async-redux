import React from 'react'
import { connect } from 'react-redux'

import YourPoke from './YourPoke'

function YourPokemon (props) {
    return (<div className='container'>
        <h2>Your Pokemon:</h2>
        <div className='your-pokemon'>
            {props.builtPoke.map((poke, i) => <YourPoke poke={poke} key={i} />)}
        </div>
    </div>)
}

function mapStateToProps (state){
    return({
        builtPoke: state.builtPoke
    })
}

export default connect(mapStateToProps)(YourPokemon)