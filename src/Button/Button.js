import React, { Component } from 'react';
import './Button.css';

class Button extends Component{
  render(){
    return(
      <button className={this.props.btnType}>
        {this.props.btnText}
      </button>
    )
  }
}

export default Button;
