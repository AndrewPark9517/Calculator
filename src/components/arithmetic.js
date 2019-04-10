import React from 'react';
import Button from './button';
import '../style/arithmetic.css';

export default function Arithmetic(props) {
    return (
        <div className="Arithmetic">
            <Button className={'arith-key'} value={'()'}/>
            <Button className={'arith-key'} value={'^'}/>
            <Button className={'arith-key'} value={'/'}/>
            <Button className={'arith-key'} value={'*'}/>
            <Button className={'arith-key'} value={'-'}/>
            <Button className={'arith-key'} value={'+'}/>
            <Button className={'enter'} value={'Enter'}/>
        </div>
    );
}