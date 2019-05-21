import React from 'react'
import { tsPropertySignature } from '@babel/types';

function ColorPicker (props) {
    return (
        <div>
            Color Picker
            <button onClick={ () => props.handleColorClick('blue')}>Blue</button>
            <button onClick={ () => props.handleColorClick('yellow')}>Yellow</button>
            <button onClick={ () => props.handleColorClick('green')}>Green</button>
            <button onClick={ () => props.handleColorClick('purple')}>Purple</button>
            <button onClick={ () => props.handleColorClick('black')}>Black</button>
            <button onClick={ () => props.handleColorClick('red')}>Red</button>
            <button onClick={ () => props.handleColorClick('pink')}>Pink</button>
        </div>
        )
}

export default ColorPicker