import React from 'react';
import '../style/calculator.css';
import Display from './display';
import Pad from './numpad';
import Arithmetic from './arithmetic';
import Algebra from './algebra';
import Nav from './nav';

export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            display: ''
        }
    }
    render() {
        return (
            <div className = "Calculator">
                <Display />
                <div className="pad">
                    <Algebra />
                    <Nav />
                    <Pad />
                    <Arithmetic />
                </div>
            </div>
        );
    }
}