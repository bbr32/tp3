import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : this.props.value,
        }
    }

    handleClick(){
        this.props.onSubmit(this.state.value);
    }

    render() {
        return(
            <button onClick={() => this.handleClick()}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;