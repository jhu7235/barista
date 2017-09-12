/**
 * ACTION TYPES
 */
const RESET_INVENTORIES = 'RESET_INVENTORIES';
const ADD_INVENTORY = 'ADD_INVENTORY';
const REMOVE_INVENTORY = 'REMOVE_INVENTORY';
const UPDATE_INVENTORY = 'UPDATE_INVENTORY';

/**
 * ACTION CREATORS
 */
export const resetInventories = inventories => ({ type: RESET_INVENTORIES, inventories });
export const updateInventory = inventory => ({ type: UPDATE_INVENTORY, inventory });
// FUTURE PROOFING //
export const addInventory = inventory => ({ type: ADD_INVENTORY, inventory });
// FUTURE PROOFING //
export const removeInventory = id => ({ type: REMOVE_INVENTORY, id });

/**
 * REDUCER
 */
export default function reducer(inventories = [], action) {
  switch (action.type) {
    case RESET_INVENTORIES:
      return action.inventories;

    case UPDATE_INVENTORY:
      return inventories.map(inventory => {
        if (inventory.id === action.inventory.id) return action.inventory;
        else return inventory;
      });

    // FUTURE PROOFING //
    case ADD_INVENTORY:
      return [action.inventory, ...inventories];

    // FUTURE PROOFING //
    case REMOVE_INVENTORY:
      return inventories.filter(inventory => inventory.id !== action.id);

    default:
      return inventories;
  }
}

/**
 * THUNK CREATORS
 */

