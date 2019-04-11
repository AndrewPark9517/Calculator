import React from 'react';
import '../style/calculator.css';
import Display from './display';
import Pad from './numpad';
import Arithmetic from './arithmetic';
import Algebra from './algebra';
import Paran from './paran';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            position: 0
        };
    }

    editDisplay(val) {
        this.setState((state) => {
            return {display: state.display + val}
        });
    }

    render() {
        return (
            <div className = "Calculator">
                <Display display={this.state.display}/> 
                    {/*currently not  working, not sending to dislpay*/}
                <div className="pad">
                    <Algebra onClick={(val) => this.editDisplay(val)}/>
                    <Paran onClick={(val) => this.editDisplay(val)}/>
                    <Pad onClick={(val) => this.editDisplay(val)}/>
                    <Arithmetic onClick={(val) => this.editDisplay(val)}/>
                </div>
            </div>
        );
    }
}