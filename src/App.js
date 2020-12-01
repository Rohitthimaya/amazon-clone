import "./App.css";
import Header from "./Components/Header/Header";
import Orders from "./Components/Orders/Orders"
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hmt39A4I7jSJrERlGHlbpsVzHFZg6Xm00IhMRlVl2Ryl9U76Irg3kILxKGN4SdbV7pwdSJtN55iwpRdlklPnJR700gWLyb9ua"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once the app component loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>", authUser);

      if (authUser) {
        // The user just logged in ot the user was logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
