import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import SubHeader from "./SubHeader";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51N41WGSEfTqFbE7o3vMNWEIJMduvshxl0z1KaFG6gbAfIdxIwne9rI6KhPRXJEOB8xoMWT05lP0WSBLHem7geLEO00RgFtxnrl');

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if ({authUser}) {
        //the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path="/checkout" element=
          {
          <div>
            <Header />
            <SubHeader />
            <Checkout />
          </div>
          }>
        </Route>
        <Route path="/payment" element=
          {
          <div>
            <Header />
            <SubHeader />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </div>
          }>
        </Route>
        <Route path="/login" element=
          {
            <Login />
          }
        >
        </Route>
        <Route path="/" element=
          {
          <div>
            <Header />
            <SubHeader />
            <Home />
          </div>
          }>
        </Route>
      </Routes> 
    </div>
    </Router>
  );
}

export default App;
