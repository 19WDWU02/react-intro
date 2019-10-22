import React, { Component } from 'react';
import './test.css';

class Test extends Component {
  constructor(props){
    super(props);

    this.state = {
      colour: 'red'
    }

    // this.clicked = this.clicked.bind(this);
  }

  // clicked(){
  //   console.log('this is the old way and we need to bind it in the constructor');
  //   console.log(this.state.colour);

  // if(this.state.colour === 'red'){
  //   this.setState({
  //     colour: 'blue'
  //   })
  // } else {
  //   this.setState({
  //     colour: 'red'
  //   })
  // }
  // }

  clicked = () => {
    console.log('this is the es6 way');
    console.log(this.state.colour);

    if(this.state.colour === 'red'){
      this.setState({
        colour: 'blue'
      })
    } else {
      this.setState({
        colour: 'red'
      })
    }

  }

  render(){
    return (
      <div className={`link ${this.state.colour}`} onClick={this.clicked}   >
        {this.state.colour}
        <a className="anchor" href={this.props.href}>{this.props.message}</a>
      </div>
    )
  }
}

export default Test;
