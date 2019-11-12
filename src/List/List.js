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

  componentDidUpdate(){
    // console.log('the component has been updated');
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

    if(currentItem.id === null){
      const newItem = {
        id: allItems.length + 1,
        text: currentItem.value
      }

      allItems.push(newItem);
    } else {
      for (let i = 0; i < allItems.length; i++) {
        if(allItems[i].id === currentItem.id){
          allItems[i].text = currentItem.value
          break;
        }
      }
    }

    this.setState({
      currentItem: {
        id: null,
        value: ''
      },
      allItems: allItems
    })

  }

  handleDelete = (idOfItem) => {
    // console.log('need to delete');
    // console.log(idOfItem);
    const { allItems } = this.state;
    for (let i = 0; i < allItems.length; i++) {
      if(allItems[i].id === idOfItem){
        allItems.splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < allItems.length; i++) {
      allItems[i].id = i + 1
    }
    // console.log(allItems);

    this.setState({
      allItems: allItems
    })

  }

  handleEdit = (id) => {
    const { allItems } = this.state;
    for (let i = 0; i < allItems.length; i++) {
      if(allItems[i].id === id){
        this.setState({
          currentItem: {
            id: id,
            value: allItems[i].text
          }
        });
      }
    }
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
                deleteItem={this.handleDelete}
                editItem={this.handleEdit}
                />
            })
          }
        </div>
      </div>
    )
  }
}

export default List;
