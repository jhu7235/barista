import React, { Component } from 'react';
import { connect } from 'react-redux';
import { byListId } from './helper';

/**
 * COMPONENT
 */
class Inventory extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='inventory' className='container'>
        <h2>Inventory</h2>
        <div>
          <ul>
            {Object.keys(this.props.inventories).map(key => this.props.inventories[key])
              .sort(byListId)
              .map(item => (<li key={item.listId}>{item.name} {item.count}</li>))
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    inventories: state.inventories,
  };
};

const mapDispatch = (dispatch) => {
  return {
  };
};

export default connect(mapState, mapDispatch)(Inventory);