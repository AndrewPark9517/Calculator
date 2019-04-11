import React from 'react';
import Button from './button';
import '../style/pad.css';

export default function Pad(props) {
    return(
        <div className="NumPad">
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"9"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"8"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"7"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"6"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"5"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"4"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"3"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"2"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"1"}/>
            <Button onClick={(val) => props.onClick(val)} className={'pad-number'} value={"0"}/> 
            <Button onClick={(val) => props.onClick(val)} className={'pad-key'} value={"."}/>
        </div> 
    );
}