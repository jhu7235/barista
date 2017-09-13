import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu.jsx';
import Inventory from './Inventory.jsx';
import Message from './Message.jsx';
import { displayMessageTC } from '../store/messages';
import { updateInventoryCount } from '../store/inventories';
import { postMenuItemStatuses } from '../store/menuItems';
import Promise from 'bluebird';

/**
 * COMPONENT
 */
class Selection extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    this.props.handleSubmit(event, this.props.inventories, this.props.menuItems)
  }

  render() {
    return (
      <div id='selection' className='container'>
        {console.log(this.props.messages.throw)}
        {this.props.messages.throw
          ? <Message />
          : (<div>
              <h1>Barista-matic</h1>
              <Menu />
              <Inventory />
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <div>
                    <label>Please enter your beverage below</label>
                    <input
                      name="menuItem"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button type='submit' className="btn-flat">Submit</button>
                </div>
              </form>
                <button className="btn-flat" onClick='handleReset'>Reset Inventory</button>
            </div>)
        }

      </div>
    );
  }
}


const mapState = (state) => {
  return {
    menuItems: state.menuItems,
    inventories: state.inventories,
    messages: state.messages,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: (event, inventories, menuItems) => {

      function placeOrder(menuId) {
        const recipe = [...menuItems[menuId].recipe],
          promiseArr = [],
          ingredientIds = [];
          
        dispatch(displayMessageTC('2', menuItems[menuId].name));
        recipe.map( ingredient => {
          ingredientIds.push(ingredient.id)
          promiseArr.push(new Promise((resolve) => {
            resolve(dispatch(updateInventoryCount({
              id: ingredient.id,
              count: ingredient.count,
            })))
          }))
        })
        Promise.all(promiseArr)
          .then((res) => {
            dispatch(postMenuItemStatuses({ingredientIds: ingredientIds, inventories }))
          })
      }

      event.preventDefault();
      const menuId = event.target.menuItem.value.toString();
      if(!menuItems[menuId]) {dispatch(displayMessageTC('1', menuId))}
      else if(!menuItems[menuId].inStock) dispatch(displayMessageTC('3', menuItems[menuId].name))
      else placeOrder(menuId)
    }
  }
}


export default connect(mapState, mapDispatch)(Selection);
