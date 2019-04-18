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

    delete() {
        let str = this.state.display;
        let pat = /\($/;
        if(pat.test(str) && str.length !== 0) {
            str = str.replace(/\w{3}\($/, '');
            this.setState(() => {
                return {display: str};
            });
        }
        else if(str == "ERROR") {
            str = '';
            this.setState({display: str});
        }
        else {
            str = str.replace(/.$/, '');
            this.setState(() => {
                return {display: str};
            });
        }
    }

    calc(str) {
        let dblpat = /[\.\/\*\^\+\-]{2}/;
        this.checkParans(this.state.display);
        if(dblpat.test(str)) {
            this.setState({display: 'ERROR'});
        }
        
    }

    checkParans(str) { // check if parantheses open and close properly
        let parans = str.split('').filter(char => char == '(' || char == ')');
        let checker = [];
        parans.forEach(par => {
            if(par == '(') {
                checker.push('(');
            }
            else {
                if(!checker.pop()) {
                    this.setState({display: 'ERROR'})
                }
            }
        });
    }

    render() {
        return (
            <div className = "Calculator">
                <Display display={this.state.display}/> 
                    {/*currently not  working, not sending to dislpay*/}
                <div className="pad">
                    <Algebra editDisplay={(val) => this.editDisplay(val)}/>
                    <Paran editDisplay={(val) => this.editDisplay(val)}/>
                    <Pad editDisplay={(val) => this.editDisplay(val)}/>
                    <Arithmetic
                        delete={() => this.delete()} 
                        editDisplay={(val) => this.editDisplay(val)}
                        calc={(str)=> this.calc(str)}
                        display={this.state.display}
                    />
                </div>
            </div>
        );
    }
}