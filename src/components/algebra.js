import React from 'react';
import Button from './button';
import '../style/algebra.css';

export default function Algebra(props) {
    return (
        <div className={'Algebra'}>
            <Button editDisplay={(val) => props.editDisplay(val)} className="alg-key" value="sin("/>
            <Button editDisplay={(val) => props.editDisplay(val)} className="alg-key" value="cos("/>
            <Button editDisplay={(val) => props.editDisplay(val)} className="alg-key" value="tan("/>
        </div>
    );
}