import React from 'react';
import Button from './button';
import '../style/paran.css';

export default function Paran(props) {
    return (
        <div className="Paran">
            <Button onClick={(val) => props.onClick(val)} className="nav" value="("/>
            <Button onClick={(val) => props.onClick(val)} className="nav" value=")"/>
        </div>
    )
}