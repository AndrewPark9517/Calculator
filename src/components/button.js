import React from 'react';
import '../style/button.css';

export default function Button(props) {
    return(
        <button 
            onClick={() => props.value == "Del" ? props.delete() : props.editDisplay(props.value)} 
            type="button" 
            className={`Button ${props.className}`}>
                {props.value}
        </button>
    )
}