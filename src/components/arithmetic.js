import React from 'react';
import Button from './button';
import '../style/arithmetic.css';

export default function Arithmetic(props) {
    return (
        <div className="Arithmetic">
            <Button
                delete={() => props.delete()} 
                editDisplay={(val) => props.editDisplay(val)} 
                className={'arith-key'} 
                value={'Del'}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'arith-key'} value={'^'}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'arith-key'} value={'/'}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'arith-key'} value={'*'}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'arith-key'} value={'-'}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'arith-key'} value={'+'}/>
            <Button
                calc={(str) => props.calc(str)}
                display={props.display}
                editDisplay={(val) => props.editDisplay(val)} 
                className={'enter'} 
                value={'Enter'}/>
        </div>
    );
}