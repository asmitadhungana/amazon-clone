import React from 'react';
import {BrowseRouter as Router, Switch, Route} from "react-router"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path = "/checkout">
         <h1>Checkout</h1>
       </Route>
       <Route path = "/login">
         <h1>login</h1>
       </Route>
       <Route path = "/">
         <h1>Default home page</h1>
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
