import { initialInventories } from '../initialData';
import { newId } from './helper';

/**
 * ACTION TYPES
 */
const RESET_INVENTORIES = 'RESET_INVENTORIES';
const PUT_INVENTORY = 'PUT_INVENTORY';
const DELETE_INVENTORY = 'DELETE_INVENTORY';
const POST_INVENTORY_COUNT = 'POST_INVENTORY_COUNT';

/**
 * ACTION CREATORS
 */
export const resetInventories = () => ({ type: RESET_INVENTORIES, initialInventories });
export const postInventoryCount = data => ({ type: POST_INVENTORY_COUNT, data });
// FUTURE PROOFING //
export const addInventory = inventory => ({ type: PUT_INVENTORY, inventory });
// FUTURE PROOFING //
export const removeInventory = id => ({ type: DELETE_INVENTORY, id });

/**
 * REDUCER
 */
export default function reducer(inventories = {}, action) {
  let newInventories = JSON.parse(JSON.stringify(inventories));
  switch (action.type) {
    case RESET_INVENTORIES:
      newInventories = JSON.parse(JSON.stringify(action.initialInventories));
      return newInventories;

    case POST_INVENTORY_COUNT:
      newInventories[action.data.id].count -= action.data.count      
      return newInventories

    // FUTURE PROOFING //
    case PUT_INVENTORY:
      let id = newId(newInventories)
      newInventories[id] = action.inventory;
      return newInventories[id];

    // FUTURE PROOFING //
    case DELETE_INVENTORY:
      return inventories.filter(inventory => inventory.id !== action.id);

    default:
      return inventories;
  }
}
export const updateInventoryCount = (data) => (dispatch) => {
  let id = data.id
  let count = data.count;
  return dispatch(postInventoryCount({ id, count }))
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
