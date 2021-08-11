import React, { useState } from 'react'
import { connect } from 'react-redux'

const initialValues = {
    name: '',
    level: 1,
    hpIV: 0,
    attIV: 0,
    defIV: 0,
    spAttIV: 0,
    spDefIV: 0,
    speedIV: 0
}

function BuildPoke (props){
    const [formValues, setFormValues] = useState(initialValues)

    if (props.isCallingPoke){
        return <div>We're fetching the data for you!</div>
    }else if (props.errorPoke !== ''){
        return <div>We've encountered an error: {props.errorPoke}</div>
    }else if (props.selectedPoke === ''){
        return <h2>Pick a Pokemon!</h2>
    }else{
        return (<div className='build-poke'>
            <img src={props.selectedPoke.sprites.front_default} alt={props.selectedPoke.name} />
            <h2>{props.selectedPoke.name}</h2>
        </div>)
    }
}

function mapStateToProps(state){
    return ({
        selectedPoke: state.selectedPoke,
        isCallingPoke: state.isCallingPoke,
        errorPoke: state.errorPoke
    })
}

export default connect(mapStateToProps)(BuildPoke)