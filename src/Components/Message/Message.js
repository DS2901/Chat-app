// import React from 'react'

// import "./Message.css"

// const Message = ({user,message,classs}) => {

//     if(user){
//         return(
//             <div className={`messagebox ${classs}`}>
//               {`${user}:${message}`}
//             </div>
//         )
//     }
//     else{

  
//   return (
//     <div className='messageBox  left'>
//       {message}
//     </div>
//   )
// }

// }

// export default Message

import React from 'react'
import "./Message.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${classs}`}>
            {`${user ? user : 'You'}: ${message}`}
          </div>
          
          
        )
    }
}

export default Message
