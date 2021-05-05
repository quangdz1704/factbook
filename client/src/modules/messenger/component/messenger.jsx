import React, {useState, useEffect} from 'react';
import io  from "socket.io-client";
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';

import Input from "./Input/Input.jsx"
import Messages from "./Messages/Messages.jsx"
import TextContainer from "./TextContainer/TextContainer.jsx"
import InfoBar from "./InfoBar/InfoBar.jsx"
import Header from "../../header/Header"
import "./Chat.css"

let socket;
const Messenger = (props) =>{
  const {user} = props.auth;
  const [name, setName] = useState("");
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [check, setCheck] = useState(true)
  
    useEffect(() => {
        socket = io.connect("http://localhost:8000");
        setRoom("abc");
        setName(user.firstName);
        socket.emit("join", {name, room})
    }, [props]);

    useEffect(() => {
        console.log('ooooooooooooooooo');
        socket.on('message', ({name, text}) => {
          console.log('messengerrrrrrrrrrrr',{name, text} );
          setMessages(messages => [ ...messages, {text, name} ]);
        });
    
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, [message]);

  const sendMessage = (event) => {
    
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', {name, message}, () =>{
        setMessage("")
      });
      
    }
  }

    return(

    <div>
      <Header />
      <div className="outerContainer">
      <div div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
    </div>
    )
}

const mapStateToProps = (state)=>{
  return state;
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(Messenger));