import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
class Menu extends Component {
	constructor() {
		super();
		this.calculatePrice = this.calculatePrice.bind(this);
    this.padNumber = this.padNumber.bind(this);
	}

	calculatePrice (item) {
		let sum = 0;
    item.recipe.map(ingredient => {
      let cost = this.props.inventories[ingredient.id].cost;
      sum += cost;
    })
		return this.padNumber(sum);
	}

	padNumber (number) {
    let newNumber = Math.round(number*100)/100
    let decimal = newNumber.toString().split('.')[1].padEnd(2, '0')
    let digit = newNumber.toString().split('.')[0]
		return [digit, decimal].join('.');
	}

  render() {
    return (
      <div id='menu' className='container'>
        <h2>Menu</h2>
        <div>
          <ul>
            {Object.keys(this.props.menuItems).map((key,index) => {
              let item = this.props.menuItems[key]
              return (<li key={key}>{index+1}. {item.name} ${this.calculatePrice(item)} {item.inStock? 'In Stock' : 'Out of Stock'}</li>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    menuItems: state.menuItems,
    inventories: state.inventories,
  };
};

const mapDispatch = (dispatch) => {
  return {
  };
};

export default connect(mapState, mapDispatch)(Menu);