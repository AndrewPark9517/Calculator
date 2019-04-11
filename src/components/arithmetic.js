import React from 'react';
import Button from './button';
import '../style/arithmetic.css';

export default function Arithmetic(props) {
    return (
        <div className="Arithmetic">
            <Button onClick={(val) => props.onClick(val)} className={'arith-key'} value={'Del'}/>
            <Button onClick={(val) => props.onClick(val)} className={'arith-key'} value={'^'}/>
            <Button onClick={(val) => props.onClick(val)} className={'arith-key'} value={'/'}/>
            <Button onClick={(val) => props.onClick(val)} className={'arith-key'} value={'*'}/>
            <Button onClick={(val) => props.onClick(val)} className={'arith-key'} value={'-'}/>
            <Button onClick={(val) => props.onClick(val)} className={'arith-key'} value={'+'}/>
            <Button onClick={(val) => props.onClick(val)} className={'enter'} value={'Enter'}/>
        </div>
    );
}