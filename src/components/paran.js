import React from 'react';
import Button from './button';
import '../style/paran.css';

export default function Paran(props) {
    return (
        <div className="Paran">
            <Button editDisplay={(val) => props.editDisplay(val)} className="nav" value="("/>
            <Button editDisplay={(val) => props.editDisplay(val)} className="nav" value=")"/>
        </div>
    )
}