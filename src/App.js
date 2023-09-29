
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Join from "./Components/Joins/Joins.js"
import chat from "./Components/Chat/Chat.js"


function App() {
 
  return (
    <div className="App">
    
    <Router>
      <Route exact path="/" component={Join}></Route>
      <Route path="/chat" component={chat}></Route>
    </Router>

    </div>
  );
}

export default App;
