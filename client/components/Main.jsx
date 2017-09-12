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
    };
  }

  render() {
    return (
      <Router>
        <Main>
          <Switch>
            {/* Main placed here are available to all visitors */}
            <Route component={Selection} />
            {/* Displays our Login component as a fallback */}
            <Route component={Message} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

