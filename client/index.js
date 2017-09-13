import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import Main from './components/Main.jsx';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  (<Provider store={store}>
    <Main />
  </Provider>),
  document.getElementById('app')
);
