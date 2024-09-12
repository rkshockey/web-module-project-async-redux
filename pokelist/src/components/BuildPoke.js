import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBuilt } from '../action/pokeActions'

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

    function handleChange (e){
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    function handleClick (e){
        e.preventDefault();
        const newBuilt = {
            name: formValues.name,
            level: Number(formValues.level),
            hpIV: Number(formValues.hpIV),
            attIV: Number(formValues.attIV),
            defIV: Number(formValues.defIV),
            spAttIV: Number(formValues.spAttIV),
            spDefIV: Number(formValues.spDefIV),
            speedIV: Number(formValues.speedIV),
            sprite: props.selectedPoke.sprites.front_default,
            hp: props.selectedPoke.stats[0].base_stat,
            att: props.selectedPoke.stats[1].base_stat,
            def: props.selectedPoke.stats[2].base_stat,
            spAtt: props.selectedPoke.stats[3].base_stat,
            spDef: props.selectedPoke.stats[4].base_stat,
            speed: props.selectedPoke.stats[5].base_stat
        }
        props.addBuilt(newBuilt)
        setFormValues(initialValues)
    }

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
            <h3>Base Stats</h3>
            <p>HP: {props.selectedPoke.stats[0].base_stat}, Attack: {props.selectedPoke.stats[1].base_stat}, Defense: {props.selectedPoke.stats[2].base_stat}, Sp.Attack: {props.selectedPoke.stats[3].base_stat}, Sp.Defense: {props.selectedPoke.stats[4].base_stat}, Speed: {props.selectedPoke.stats[5].base_stat}</p>
            <form>
                <h3>Name your Pokemon!</h3>
                <input name='name' value={formValues.name} onChange={handleChange} />
                <h3>Select Level</h3>
                <input name='level' value={formValues.level} type='number' onChange={handleChange} />
                <h3>Input IVs</h3>
                <label htmlFor='hp'> HP: </label>
                <input name='hpIV' id='hp' value={formValues.hpIV} type='number' onChange={handleChange} />
                <label htmlFor='att'> Attack: </label>
                <input name='attIV' id='att' value={formValues.attIV} type='number' onChange={handleChange} />
                <label htmlFor='def'> Defense: </label>
                <input name='defIV' id='def' value={formValues.defIV} type='number' onChange={handleChange} />
                <label htmlFor='spAtt'> Sp.Attack: </label>
                <input name='spAttIV' id='spAtt' value={formValues.spAttIV} type='number' onChange={handleChange} />
                <label htmlFor='spDef'> Sp.Defense: </label>
                <input name='spDefIV' id='spDef' value={formValues.spDefIV} type='number' onChange={handleChange} />
                <label htmlFor='speed'> Speed: </label>
                <input name='speedIV' id='speed' value={formValues.speedIV} type='number' onChange={handleChange} />
                
                <div className='make-pokemon' onClick={handleClick}>Make this Pokemon!</div>
            </form>
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

export default connect(mapStateToProps, { addBuilt })(BuildPoke)