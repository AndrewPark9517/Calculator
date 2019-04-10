import React from 'react';
import Button from './button';
import '../style/algebra.css';

export default function Algebra(props) {
    return (
        <div className={'Algebra'}>
            <Button className="alg-key" value="sin()"/>
            <Button className="alg-key" value="cos()"/>
            <Button className="alg-key" value="tan()"/>
        </div>
    );
}