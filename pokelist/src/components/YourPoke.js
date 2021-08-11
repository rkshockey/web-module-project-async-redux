import React from 'react'

function YourPoke (props) {
    return (<div className='your-poke-card'>
        <h3>{props.poke.name}, Level {props.poke.level}</h3>
        <img src={props.poke.sprite} alt={props.poke.name} />
        <h4>Stats:</h4>
        <p>HP: {((props.poke.hpIV + (2 * props.poke.hp)) * (props.poke.level / 100)) + props.poke.level + 10}, Attack: {((props.poke.attIV + 2 * props.poke.att) * props.poke.level / 100) + 5}, Defense: {((props.poke.defIV + 2 * props.poke.def) * props.poke.level / 100) + 5}</p>
        <p>Sp.Attack: {((props.poke.spAttIV + 2 * props.poke.spAtt) * props.poke.level / 100) + 5}, Sp.Defense: {((props.poke.spDefIV + 2 * props.poke.spDef) * props.poke.level / 100) + 5}, Speed: {((props.poke.speedIV + 2 * props.poke.speed) * props.poke.level / 100) + 5}</p>
    </div>)
}

export default YourPoke