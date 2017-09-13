import React, { Component } from 'react';
import Selection from './Selection.jsx';
import Message from './Message.jsx';
import { resetInventories } from '../store/inventories';
import { resetMenuItems } from '../store/menuItems';
import { resetMessages } from '../store/messages';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
class Main extends Component {
  constructor() {
    super();
    this.state = {
      appStarted: false,
    }
    this.handleStart = this.handleStart.bind(this)
  }

  handleStart() {
    this.setState({ appStarted: true })
  }

  handleQuit() {
    this.setState({ appStarted: false })
  }

  componentDidMount() {
    this.props.loadInitialData(this.props.inventories);
  }

  render() {
    return (
      <div id='main' className='center'>
        {this.state.appStarted
          ? (<div>
            <Selection />
              <button onClick={this.handleQuit} className="btn-flat">Exit</button>
            </div>)
          : (
            <div id='welcome' className='container'>
              <h1>Welcome to Barista-matic</h1>
              <button onClick={this.handleStart} className="btn-flat btn-primary">Start</button>
            </div>
          )
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    inventories: state.inventories,
    menuItems: state.menuItems,
    messages: state.messages,
    appStarted: state.appStarted
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData(inventories) {
      dispatch(resetInventories());
      dispatch(resetMenuItems(inventories));
      dispatch(resetMessages());
    },
  };
};

export default connect(mapState, mapDispatch)(Main);
