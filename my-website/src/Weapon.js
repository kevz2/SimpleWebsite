import React from 'react'
import './Weapon.css'

function Weapon(props) {
    return (
        <div className='weapon'>
            <a href={props.weapon_link}>
                <img className='weapon_image' src={props.weapon_image}></img>
                <h4 className='weapon_name'>{props.weapon_name}</h4>
            </a>
        </div>
    )
}

export default Weapon