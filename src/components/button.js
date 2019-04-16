import React from 'react';
import '../style/button.css';

export default class Button extends React.Component {

    onClick(val) { //sort which props.method to run
        if(val == "Del") {
            this.props.delete();
        }
        else {
            this.props.editDisplay(val);
        }
    }

    render() {
        return(
            <button 
                onClick={() => this.onClick(this.props.value)} 
                type="button" 
                className={`Button ${this.props.className}`}>
                    {this.props.value}
            </button>
        );
    }
    
}