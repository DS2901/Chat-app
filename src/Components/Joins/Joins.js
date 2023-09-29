// import React, { useState } from "react";
// import "./Join.css";
// import { Link } from "react-router-dom";
// import logo from "../../IImages/logo.png";

// let user;
// const Joins = () => {

//     const sendUser=()=>{
//        user= document.getElementById('joininput').value;
//        document.getElementById('joininput').value=" ";
//     }


//     const [name, setName]=useState("")
//     console.log(name)

//   return (
//     <div className="JoinPage">
//       <div className="JoinContainer">
//       <img src={logo} alt="logo" />
//         <h1> C CHAT</h1>
//         <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Emter Your Name" id="joininput" />
//         <Link onClick={(event)=>!name===""?event.preventDefault():null} to="/chat"><button onClick={sendUser} className="Joinbtn">Login</button> </Link>
        
//       </div>
//     </div>
//   );
// };

// export default Joins;
// export {user};

import React, { useState } from 'react'
import "./Join.css";
import logo from "../../IImages/logo.png";
import { Link } from "react-router-dom";

let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = "";
}


const Joins = () => {

    const [name, setname] = useState("");

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>C CHAT</h1>
                <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="joinbtn">Login In</button></Link>
            </div>
        </div>
    )
}

export default Joins
export { user }
