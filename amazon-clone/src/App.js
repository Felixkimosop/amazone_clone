import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import { useEffect } from "react";
import { auth } from "./Component/firebase";
import { useStateValue } from "./Component/StateProvider";
import Payment from "./Component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Mk4F1EYVxoq60O3qxSVi7GEQBaFCmte0rXvz1qMuHUBZ5LmmazSNBUHgcdtRJ9D3J2F01qaJGszbGatHasTQkrW00OK8a0ASn"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("Auth state changed", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={[
            <Header />,
            <Elements stripe={promise}>
              <Payment />
            </Elements>,
          ]}
        />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/" element={[<Header />, <Home />]} />
      </Routes>
    </div>
  );
  // Header
}

export default App;
