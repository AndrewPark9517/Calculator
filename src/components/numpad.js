import React from 'react';
import Button from './button';
import '../style/pad.css';

export default function Pad(props) {
    return(
        <div className="NumPad">
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"9"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"8"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"7"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"6"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"5"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"4"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"3"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"2"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"1"}/>
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-number'} value={"0"}/> 
            <Button editDisplay={(val) => props.editDisplay(val)} className={'pad-key'} value={"."}/>
        </div> 
    );
}