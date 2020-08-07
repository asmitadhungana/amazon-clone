import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [ { user }, dispatch ] = useStateValue();

  //useEffect hook <<< POWERFUL
  //Piece of code which runs based on a given condition | listener

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( (authUser) => {
      if ( authUser ) {
        //the user is logged in... set user state to auth(enticated)User

        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        //the user is logged out...set user state to null

        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      // Any cleanup operations go in here, eg:after timeout
      unsubscribe();
    }
  }, []);

  console.log("USer is >>>" + user);

  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path = "/checkout">
         <Header />
         <Checkout/>
       </Route>
       <Route path = "/login">
         <Login />
       </Route>
       <Route path = "/">
         <Header/>
         <Home />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
