import React from 'react';
import { connect } from 'react-redux';
import { displayMessageTC } from '../store/messages'

/**
 * COMPONENT
 */
const Message = ({messages, handleSubmit}) => {
  const messageId = messages.throw
  console.log(messages[messageId].text)
  return (<div>
    <h1>{messages[messageId].text.toString()} {messages.append.toString()}</h1>
    <button onClick={handleSubmit} className="btn-flat">Place Another Order</button>
  </div>);
}


const mapState = (state) => {
  return {
    messages: state.messages,
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(){
      dispatch(displayMessageTC(null, null));
    }
  }
}


export default connect(mapState, mapDispatch)(Message);