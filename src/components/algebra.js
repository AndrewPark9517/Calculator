import React from 'react';
import Button from './button';
import '../style/algebra.css';

export default function Algebra(props) {
    return (
        <div className={'Algebra'}>
            <Button onClick={(val) => props.onClick(val)} className="alg-key" value="sin()"/>
            <Button onClick={(val) => props.onClick(val)} className="alg-key" value="cos()"/>
            <Button onClick={(val) => props.onClick(val)} className="alg-key" value="tan()"/>
        </div>
    );
}