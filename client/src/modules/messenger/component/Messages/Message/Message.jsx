import React from 'react';

import './Message.css';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import ReactEmoji from 'react-emoji';

const Message = (props) => {
  

  let isSentByCurrentUser = false;
  const { text, name } = props;
  const { user } = props.auth;
  const trimmedName = name.trim().toLowerCase();
     console.log('messsssssssssss', name, text);
  if(user.firstName === name) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{name}</p>
          </div>
        )
  );
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(withTranslate(Message));