import React from 'react';
import '../style/display.css';

export default function Display(props) {
    return (
        <div className = "Display">
            {props.display}
        </div>
    );
}