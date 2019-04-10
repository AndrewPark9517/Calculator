import React from 'react';
import Button from './button';
import '../style/nav.css';

export default function Nav(props) {
    return (
        <div className="Nav">
            <Button className="nav" value="<-"/>
            <Button className="nav" value="->"/>
        </div>
    )
}