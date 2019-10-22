import React, { Component } from 'react';
import './List.css';
import Form from '../Form/Form';
import Item from '../Item/Item';

class List extends Component{

  render(){
    return(
      <div className="listContainer">
        <h1>Shopping List</h1>
        <Form />
        <div className="list">
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}

export default List;
