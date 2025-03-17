import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Cookies from "js-cookie";

import { useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token);
      setUserToken(token);
    } else {
      Cookies.remove("token");
      setUserToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/home" element={<Home data={data} />} />
          <Route path="/offer/:id" element={<Offer data={data} />} />
          <Route
            path="/signup"
            element={
              <SignUp userToken={userToken} setUserToken={setUserToken} />
            }
          />
          <Route
            path="/login"
            element={
              <LogIn userToken={userToken} setUserToken={setUserToken} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

