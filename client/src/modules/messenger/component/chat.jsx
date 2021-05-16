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

import { ChatActions } from '../redux/action';

let socket;
const Chat = (props) =>{
  const { user } = props.auth
  const [name, setName] = useState("");
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentConversation, setCurrentConversation] = useState();
  const { conversations } = props.chat;

  console.log('aaaaaaaaaaaaa', conversations);

  useEffect(() => {
    props.getAllConversations();
  }, []);


  useEffect(() => {
        socket = io.connect(process.env.REACT_APP_SERVER);
    setName(user.firstName);
    // conversation là các cuộc nói chuyện, thực hiện join vào các cuộc nói chuyện
    conversations.forEach(con => {
      let data = {
        userId: user.firstName,
        roomId: con._id,
      }
      socket.emit('join', data, (error) => {
        if (error) {
          alert(error);
        }
      });
    })
  
  }, [conversations.length]);
  
    useEffect(() => {
        socket.on('message', (data) => {
          setMessages(messages => [...messages, { content: data.text, creator: data.creator }]);
          props.receiveMessage({ content: data.text, creator: data.creator }, data.roomId)
        });
      
       socket.on("roomData", (data) => {
        console.log('roomdata', data);
       });
      
    },[conversations.length]);

    // ham gửi tin nhắn
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      let data = {
        creator: user,
        roomId: currentConversation._id,
        message,
      }
      socket.emit('sendMessage', data, () =>{
        setMessage("")
      });
      
    }
  }

  const joinConversation = (conversation) => {
    setMessages(conversation.message)
    setCurrentConversation(conversation);
  }
    return(

      <div>
        <Header />
        <div className="outerContainer">
          <div className="col-6">
            <TextContainer users={conversations} setCurrentConversation={joinConversation}/>
          </div>

          <div div className="container containerChat col-6">
            {
              currentConversation  ? (
                <div>
                  <InfoBar room={currentConversation} />
                  <Messages messages={messages} name={name} currentConversation={currentConversation} />
                  <Input message={message} setMessage={setMessage} sendMessage={sendMessage}  />
                </div>
              ) : <> </>
            }
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state)=>{
  return state;
}

const mapDispatchToProps = {
  getAllConversations: ChatActions.getAllConversations,
  receiveMessage: ChatActions.receiveMessage,

}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslate(Chat));