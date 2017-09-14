import React, { Component } from 'react';
import { connect } from 'react-redux';
import Promise from 'bluebird';
import Menu from './Menu.jsx';
import Inventory from './Inventory.jsx';
import Message from './Message.jsx';
import { displayMessageTC } from '../store/messages';
import { updateInventoryCount } from '../store/inventories';
import { postMenuItemStatuses } from '../store/menuItems';
import { resetInventories } from '../store/inventories';
import { resetMenuItems } from '../store/menuItems';
import { listIdToId } from './helper';

/**
 * COMPONENT
 */
class Selection extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const result = this.props.handleSubmit(event, this.props.menuItems)
    if(result) {
      result.then((ingredientIds) => {
          return this.props.postMenuItemStatuses({ingredientIds, inventories: this.props.inventories })
        })
        .catch(console.log)
    }
      // 
  }

  render() {
    return (
      <div id='selection' className='container'>
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
                      className="form-control center"
                      required
                    />
                  </div>
                </div>
                <div>
                  <button type='submit' className="btn-flat">Submit</button>
                </div>
              </form>
                <button className="btn-flat" onClick={this.props.handleReset}>Reset Inventory</button>
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
    handleSubmit: (event, menuItems) => {

      function placeOrder(menuId) {
        const recipe = [...menuItems[menuId].recipe],
          promiseArr = [],
          ingredientIds = [];

        dispatch(displayMessageTC('2', menuItems[menuId].name));

        recipe.map( ingredient => {
          ingredientIds.push(ingredient.id)
          promiseArr.push(new Promise((resolve) => {
            resolve(dispatch(updateInventoryCount({ id: ingredient.id, count: ingredient.count})))
          }))
        })
        return (Promise.all(promiseArr))
          .then(() => {
            return ingredientIds
          })
          .catch(console.log)
      }

      const menuId = listIdToId(event.target.menuItem.value.toString(), menuItems)
      console.log(menuId)
      if(!menuId) return dispatch(displayMessageTC('1', event.target.menuItem.value.toString()))
      else if(!menuItems[menuId].inStock) return dispatch(displayMessageTC('3', menuItems[menuId].name))
      else return placeOrder(menuId)
    },

    postMenuItemStatuses: (data) => {
      dispatch(postMenuItemStatuses(data));
    },

    handleReset: (inventories) => {
      dispatch(resetInventories());
      dispatch(resetMenuItems());
    },

  }
}


export default connect(mapState, mapDispatch)(Selection);
