import React from 'react';
import '../style/button.css';

export default function Button(props) {
    return(
        <button onClick={() => props.onClick(props.value)} type="button" className={`Button ${props.className}`}>
            {props.value}
        </button>
    )
}