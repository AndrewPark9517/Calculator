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
        console.log("the stored display: ", str);
        let pat = /\w{3}\($/;
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
        let dblpat = /[\.\/\*\^\+\-]{2}/g;
        let decpat = /\.[0-9a-b\(\)]{1,}\./g;
        let emptyparan = /\(\)/g;
        str = this.insertMultiplier(str); // so parantheses next to one another/number 
            // will be read as multiplcation during order of operations
        this.checkParans(str);
        if(dblpat.test(str)) {
            this.setState({display: 'ERROR'});
            console.log("double expression error");
        }
        else if(decpat.test(str)) {
            this.setState({display: 'ERROR'});
            console.log("decimal error");
        }
        else if(emptyparan.test(str)) {
            this.setState({display: 'ERROR'});
            console.log("empty paranthesis error");
        }

        str = this.sincostan(str); // purpose is to remove any paranthese characters
                                   // that are not part of order of operations

        function orderOfOp(str) { // go through recursively through order of operations
            if(/^\d+\.?\d*$/.test("str")) {
                return str;
            }
        }
        
    }

    sincostan(str) { // replace sin, cos, and tan with number values
        let tans = str.match(/tan\([0-9]{1,}\.?[0-9]{0,}\)/g);
        if(tans) {
            let tansVal = tans.map(tan => tan.replace(/[tan\(\)]/g,""));
            let tansCalc = tansVal.map(str => 
                Math.tan(parseFloat(str)).toFixed(3));
            for(let i = 0; i < tans.length; i++) {
                str = str.replace(tans[i], tansCalc[i]);
            }
        }
        

        let sins = str.match(/sin\([0-9]{1,}\.?[0-9]{0,}\)/g);
        if(sins) {
            let sinsVal = sins.map(sin => sin.replace(/[sin\(\)]/g,""));
            let sinsCalc = sinsVal.map(str => 
                Math.sin(parseFloat(str)).toFixed(3));
            for(let i = 0; i < sins.length; i++) {
                str = str.replace(sins[i], sinsCalc[i]);
            }
        }
        
        let coses = str.match(/cos\([0-9]{1,}\.?[0-9]{0,}\)/g);
        if(coses) {
            let cosesVal = coses.map(cos => cos.replace(/[cos\(\)]/g,""));
            let cosesCalc = cosesVal.map(str => 
                Math.cos(parseFloat(str)).toFixed(3));
            for(let i = 0; i < coses.length; i++) {
                str = str.replace(coses[i], cosesCalc[i]);
            }
        }
        
        return str;
    }

    insertMultiplier(str) {
        str = str.replace(/([a-z0-9])(\()/g, "$1*$2");
        str = str.replace(/(\))([a-z0-9])/g, "$1*$2");
        return str;
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