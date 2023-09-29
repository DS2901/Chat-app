// import React, { useEffect, useState } from 'react'
// import "./Chat.css"
// import {user} from "../Joins/Joins"
// import socketIo from "socket.io-client"
// import sendLogo from "../../IImages/send.png"
// import Message from "../Message/Message"
// import ReactScrollToBottom from "react-scroll-to-bottom"

// const ENDPOINT="http://localhost:4500/";


// let socket;

// const Chat = () => {


//    const[id,setid]= useState("")

//    const[messages,setMessages]=useState([])


//    const send=()=>{

//      const message= document.getElementById('chatinput').value;
//       socket.emit('message',{message,id});
//       document.getElementById('chatinput').value=" "
//    }

    

//    useEffect(() => {
//       const socket = socketIo(ENDPOINT, { transports: ['websocket'] });
    
//       socket.on('connect', () => {
//         alert("connected");
//         setid(socket.id);
//       });

//     console.log(socket)
//     socket.emit("joined",{user})
    
//     socket.on('welcome',(data)=>{
//       setMessages([...messages,data]);
//       console.log(data.user,data.message);
//     })

//     socket.on("userJoined",(data)=>{
//       setMessages([...messages,data]);
//       console.log(data.user,data.message)  
//     })


//     socket.on('leave',(data)=>{
//       setMessages([...messages,data]);
//       console.log(data.user,data.message)

//     })

// return () => {
//     socket.emit('disconnect');
//     socket.off();
//   };
// }, []);

//   useEffect(()=>{

//    socket.on('sendMessage',(data)=>{
//       setMessages([...messages,data]);
       
//     console.log(data.user,data.message,data.id);

//    })
//    return()=>{
     
//    }
//   },[])

//   return (
//      <div className="chatPage">
//         <div className="chatContainer">
//             <div className="header"></div>
//             <ReactScrollToBottom className="chatBox">

//             {messages.map((item, i) => <Message key={i} message={item.message} classs={'left'} />)}

            
//             </ReactScrollToBottom>

//             <div className="inputBox">
//                <input type="text" id="chatinput" />
//                <button onClick={send}  className='sendbtn'><img src={sendLogo} alt="send" /></button>
//             </div>
//         </div>
//      </div>
//   )
// }

// export default Chat

import React, { useEffect, useState } from 'react'
import { user } from "../Joins/Joins";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../IImages/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../../IImages/closeIcon.png";

let socket;

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, user }); // Send the user's name along with the message
        document.getElementById('chatInput').value = '';
      };
      
      

    console.log(messages);
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });
      
        socket.on('connect', () => {
          alert('Connected');
          setid(socket.id);
        });
      
        console.log(socket);
      
        socket.on('joined', (data) => {
          console.log('Joined:', data);
        });
      
        socket.on('welcome', (data) => {
          console.log('Welcome:', data);
          setMessages((prevMessages) => [...prevMessages, data]);
        });
      
        socket.on('userJoined', (data) => {
          console.log('User Joined:', data);
          setMessages((prevMessages) => [...prevMessages, data]);
        });
      
        socket.on('leave', (data) => {
          console.log('Leave:', data);
          setMessages((prevMessages) => [...prevMessages, data]);
        });
      
        socket.on('sendMessage', (data) => {
          console.log('Received message:', data);
          setMessages((prevMessages) => [...prevMessages, data]);
        });
      
        return () => {
          socket.emit('disconect');
          socket.off();
        };
      }, []);
      
      

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            console.log('Received message:', data);
            setMessages([...messages, data]); // Check that data.message is a string
          });
          
          
        return () => {
            socket.off();
        }
    }, [messages])

    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>C CHAT</h2>
                    <a href="/"> <img src={closeIcon} alt="Close" /></a>
                </div>
                <ReactScrollToBottom className="chatBox">
  {messages.map((item, i) => (
    <Message
      key={i}
      user={item.id === id ? '' : item.user}
      message={item.message}
      classs={item.id === id ? 'right' : 'left'}
    />
  ))}
</ReactScrollToBottom>

                <div className="inputBox">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn"><img src={sendLogo} alt="Send" /></button>
                </div>
            </div>

        </div>
    )
}

export default Chat
