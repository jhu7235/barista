import { initialMenuItems } from '../initialData';
import { newId } from './helper';

/**
 * ACTION TYPES
 */
const RESET_MENU_ITEMS = 'RESET_MENU_ITEMS';
const PUT_MENU_ITEM = 'PUT_MENU_ITEM';
const DELETE_MENU_ITEM = 'DELETE_MENU_ITEM';
const POST_MENU_ITEM_STATUSES = 'POST_MENU_ITEM_STATUSES';

/**
 * ACTION CREATORS
 */
export const resetMenuItems = menuItems => ({ type: RESET_MENU_ITEMS, menuItems });
// FUTURE PROOFING //
export const postMenuItemStatuses = data => ({ type: POST_MENU_ITEM_STATUSES, data });// {id: {}}
// FUTURE PROOFING //
export const putMenuItem = menuItem => ({ type: PUT_MENU_ITEM, menuItem });
// FUTURE PROOFING //
export const deleteMenuItem = id => ({ type: DELETE_MENU_ITEM, id });

/**
 * REDUCER
 */
export default function reducer(menuItems = {}, action) {
  let newMenuItems = JSON.parse(JSON.stringify(menuItems));
  switch (action.type) {

    case RESET_MENU_ITEMS:
      return JSON.parse(JSON.stringify(initialMenuItems));

    case POST_MENU_ITEM_STATUSES:
      function updateInStock(itemId) {
        if(newMenuItems[itemId].inStock) {
          newMenuItems[itemId].inStock = newMenuItems[itemId].recipe
            .every(ingredient => {
              return ingredient.count < action.data.inventories[ingredient.id].count;
            })
        }
      }
      action.data.ingredientIds.forEach(ingId => {
        return action.data.inventories[ingId].menuItem.forEach(updateInStock)
      })
      return newMenuItems;

    // FUTURE PROOFING //
    case PUT_MENU_ITEM:
      if(!action.menuItem.text) return menuItem;
      let id = newId(newMenuItems)
      newMenuItems[id] = action.menuItem;
      return newMenuItems[id];

    // FUTURE PROOFING //
    case DELETE_MENU_ITEM:
      return menuItems.filter(menuItem => menuItem.id !== action.id);

    default:
      return menuItems;
  }
}

