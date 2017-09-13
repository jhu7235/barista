import { initialMessages } from '../initialData';
import { newId } from './helper';

/**
 * ACTION TYPES
 */
const RESET_MESSAGES = 'RESET_MESSAGES';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';
const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
  
/**
 * ACTION CREATORS
 */
export const resetMessages = () => ({ type: RESET_MESSAGES });
export const updateMessages = messages => ({ type: UPDATE_MESSAGES, messages })
export const displayMessage = messages => ({ type: DISPLAY_MESSAGE, messages})
// FUTURE PROOFING //
export const addMessage = message => ({ type: ADD_MESSAGE, message });
// FUTURE PROOFING //
export const removeMessage = id => ({ type: REMOVE_MESSAGE, id });


/**
 * REDUCER
 */
export default function reducer(messages = {}, action) {
  let newMessages = Object.assign({},messages)

  switch (action.type) {

    case RESET_MESSAGES:
      return initialMessages;

    case UPDATE_MESSAGES:
      return action.messages

    case DISPLAY_MESSAGE:
      newMessages.throw = action.messages.id;
      newMessages.append = action.messages.append;
      return newMessages; 

    // FUTURE PROOFING //
    case ADD_MESSAGE:
      if(!action.message.text) return message;
      let id = newId(newMessages)
      newMessages[id] = action.message;
      return newMessages[id];

    // FUTURE PROOFING //
    case REMOVE_MESSAGE:
      return messages.filter(message => message.id !== action.id);

    default:
      return messages;
  }
}


export const displayMessageTC = (messageId, append) =>
  dispatch => {
    let id = messageId
    dispatch(displayMessage({ id, append }))
  }

