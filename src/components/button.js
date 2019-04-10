import React from 'react';
import '../style/button.css';

export default function Button(props) {
    return(
        <button type="button" className={`Button ${props.className}`}>
            {props.value}
        </button>
    )
}