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
export const resetInventories = () => ({ type: RESET_INVENTORIES });
export const postInventoryCount = data => ({ type: POST_INVENTORY_COUNT, data });
// FUTURE PROOFING //
export const addInventory = inventory => ({ type: PUT_INVENTORY, inventory });
// FUTURE PROOFING //
export const removeInventory = id => ({ type: DELETE_INVENTORY, id });

/**
 * REDUCER
 */
export default function reducer(inventories = {}, action) {
  let newInventories = Object.assign({},inventories)
  switch (action.type) {
    case RESET_INVENTORIES:
      return initialInventories;

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
  console.log('updateInventoryCount', data)
  let id = data.id
  let count = data.count;
  return dispatch(postInventoryCount({ id, count }))
}
