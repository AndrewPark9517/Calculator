import React from 'react';
import '../style/button.css';

export default class Button extends React.Component {

    onClick(val, str) { //sort which props.method to run
        if(val == "Del") {
            this.props.delete();
        }
        else if(val == "Enter") {
            this.props.calc(str);
        }
        else {
            this.props.editDisplay(val);
        }
    }

    render() {
        return(
            <button 
                onClick={() => this.onClick(this.props.value, this.props.display)} 
                type="button" 
                className={`Button ${this.props.className}`}>
                    {this.props.value}
            </button>
        );
    }
    
}