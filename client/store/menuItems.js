/**
 * ACTION TYPES
 */
const RESET_MENU_ITEMS = 'RESET_MENU_ITEMS';
const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
const REMOVE_MENU_ITEM = 'REMOVE_MENU_ITEM';
const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';

/**
 * ACTION CREATORS
 */
export const resetMenuItems = menuItems => ({ type: RESET_MENU_ITEMS, menuItems });
// FUTURE PROOFING //
export const updateMenuItem = menuItem => ({ type: UPDATE_MENU_ITEM, menuItem });
// FUTURE PROOFING //
export const addMenuItem = menuItem => ({ type: ADD_MENU_ITEM, menuItem });
// FUTURE PROOFING //
export const removeMenuItem = id => ({ type: REMOVE_MENU_ITEM, id });

/**
 * REDUCER
 */
export default function reducer(menuItems = [], action) {
  switch (action.type) {
    case RESET_MENU_ITEMS:
      return action.menuItems;

    // FUTURE PROOFING //
    case UPDATE_MENU_ITEM:
      return menuItems.map(menuItem => {
        if (menuItem.id === action.menuItem.id) return action.menuItem;
        else return menuItem;
      });

    // FUTURE PROOFING //
    case ADD_MENU_ITEM:
      return [action.menuItem, ...menuItems];

    // FUTURE PROOFING //
    case REMOVE_MENU_ITEM:
      return menuItems.filter(menuItem => menuItem.id !== action.id);

    default:
      return menuItems;
  }
}

/**
 * THUNK CREATORS
 */

