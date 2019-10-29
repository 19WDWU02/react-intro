import React, { Component } from 'react';
import './List.css';
import Form from '../Form/Form';
import Item from '../Item/Item';

class List extends Component{
  constructor(props){
    super(props);

    this.state = {
      allItems: [
        {
          id: 1,
          text: 'Apples'
        },
        {
          id: 2,
          text: 'Bananas'
        },
        {
          id: 3,
          text: 'Pears'
        },
        {
          id: 4,
          text: 'Beers'
        }
      ],
      currentItem: {
        id: null,
        value: ''
      }
    }
  }

  handleChangeInputValue = (text) => {
    let { currentItem } = this.state;
    currentItem.value = text;
    this.setState({
      currentItem: currentItem
    })
    // console.log('the input value has been changed from Form.js');
    // console.log(text);
  }

  handleSubmit = () => {
    let { allItems, currentItem } = this.state;

    const newItem = {
      id: allItems.length + 1,
      text: currentItem.value
    }

    allItems.push(newItem);

    this.setState({
      currentItem: {
        id: null,
        value: ''
      },
      allItems: allItems
    })

  }

  render(){
    console.log(this.state.allItems);
    return(
      <div className="listContainer">
        <h1>Shopping List</h1>
        <Form
          item={this.state.currentItem}
          changeInputValue={this.handleChangeInputValue}
          submit={this.handleSubmit}
         />
        <div className="list">
          {
            this.state.allItems.map(singleItem => {
              return <Item
                key={singleItem.id}
                itemInfo={singleItem}
                />
            })
          }
        </div>
      </div>
    )
  }
}

export default List;
