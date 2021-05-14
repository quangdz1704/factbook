import { useEventCallback } from '@material-ui/core';
import React, {useEffect,} from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = (props) => {
 
  const { messages } = props;
  useEffect(() => {
    //messages = props
  }, [props.currentConversation])
  return(
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message text={message.text} name={message.name}/></div>)}
  </ScrollToBottom>
)
};

export default Messages;