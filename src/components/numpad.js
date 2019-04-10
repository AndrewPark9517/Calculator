import React from 'react';
import Button from './button';
import '../style/pad.css';

export default function Pad(props) {
    return(
        <div className="NumPad">
            <Button className={'pad-number'} value={"9"}/>
            <Button className={'pad-number'} value={"8"}/>
            <Button className={'pad-number'} value={"7"}/>
            <Button className={'pad-number'} value={"6"}/>
            <Button className={'pad-number'} value={"5"}/>
            <Button className={'pad-number'} value={"4"}/>
            <Button className={'pad-number'} value={"3"}/>
            <Button className={'pad-number'} value={"2"}/>
            <Button className={'pad-number'} value={"1"}/>
            <Button className={'pad-number'} value={"0"}/> 
            <Button className={'pad-key'} value={"."}/>
        </div> 
    );
}