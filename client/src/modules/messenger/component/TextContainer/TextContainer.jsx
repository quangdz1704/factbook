import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = (props) => {

  const { users } = props;
  console.log('uuuuuuuuuuuu', users);
  return (
     <div className="textContainer">
    <div>
      <h1>Chat with friends <span role="img" aria-label="emoji">💬</span></h1>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map((user) => (
                  <div key={user.name} className="activeItem" onClick={()=>props.setCurrentConversation(user)}>
                    {user.name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  )
};

export default TextContainer;