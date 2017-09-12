import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Menu } from './Menu.jsx';

/**
 * COMPONENT
 */
class Main extends Component {
  constructor() {
    super();
    this.state = {
      inventory: {
        Cocoa: 10,
        Coffee: 10,
        Cream: 10,
        'Decaf Coffee': 10,
        Espresso: 10,
        'Foamed Milk': 10,
        'Steamed Milk': 10,
        Sugar: 10,
        'Whipped Cream': 10,
      },
      messages: {

      },
    };
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <Router>
        <Main>
          <Switch>
            {/* Main placed here are available to all visitors */}
            <Route component={Menu} />
            <Route component={Inventory} />
            <Route component={Selection} />
            {/* Displays our Login component as a fallback */}
            <Route component={Loading} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

