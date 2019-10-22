import React, { Component } from 'react';
import './Form.css';

import Button from '../Button/Button';

class Form extends Component{

  render(){
    return(
      <form className="searchForm">
        <input className="searchBar"/>
        <Button btnText="Add New Item"/>
      </form>
    )
  }
}

export default Form;
