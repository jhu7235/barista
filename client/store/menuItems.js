/**
 * ACTION TYPES
 */
const RESET_MENUITEMS = 'RESET_MENUITEMS';
const ADD_MENUITEM = 'ADD_MENUITEM';
const REMOVE_MENUITEM = 'REMOVE_MENUITEM';
const UPDATE_MENUITEM = 'UPDATE_MENUITEM';

/**
 * ACTION CREATORS
 */
export const resetInventories = inventories => ({ type: RESET_MENUITEMS, inventories });
export const updateInventory = inventory => ({ type: UPDATE_MENUITEM, inventory });
export const addInventory = inventory => ({ type: ADD_MENUITEM, inventory });
export const removeInventory = id => ({ type: REMOVE_MENUITEM, id });

/**
 * REDUCER
 */
export default function reducer(inventories = [], action) {
  switch (action.type) {
    case RESET_MENUITEMS:
      return action.inventories;

    // FUTURE PROOFING //
    case UPDATE_MENUITEM:
      return inventories.map(inventory => {
        if (inventory.id === action.inventory.id) return action.inventory;
        else return inventory;
      });

    // FUTURE PROOFING //
    case ADD_MENUITEM:
      return [action.inventory, ...inventories];

    // FUTURE PROOFING //
    case REMOVE_MENUITEM:
      return inventories.filter(inventory => inventory.id !== action.id);

    default:
      return inventories;
  }
}

/**
 * THUNK CREATORS
 */

