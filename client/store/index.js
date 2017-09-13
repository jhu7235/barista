/* Having a centralized store makes software more extendable and maintainable.
 * If there are new features that will be added it will not affect pre-existing freatures
 * because everything is compartmentalized.
 * It is easier to maintain because of seperation of concerns
 * Redux does not mutate the previous state but builds new components and switch old components out*/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import inventories from './inventories';
import menuItems from './menuItems';
import messages from './messages';

const reducer = combineReducers({ inventories, menuItems, messages });
const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));
const store = createStore(reducer, middleware);

export default store;
