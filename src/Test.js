import React, { Component } from 'react';
import './test.css';

class Test extends Component {
  render(){
    return (
      <div>
        <a href={this.props.href}>{this.props.message}</a>
      </div>
    )
  }
}

export default Test;
