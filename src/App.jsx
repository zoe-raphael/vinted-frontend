import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Publish from "./pages/Publish";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const priceMin = 0;
  const priceMax = 300;
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [title, setTitle] = useState("");
  const [values, setValues] = useState([priceMin, priceMax]);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token);
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  // console.log(token);
  return (
    <Router>
      <Header
        handleToken={handleToken}
        userToken={userToken}
        title={title}
        setTitle={setTitle}
        values={values}
        setValues={setValues}
      />
      <Routes>
        <Route path="/" element={<Home title={title} values={values} />} />
        <Route path="/home" element={<Home title={title} values={values} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
        <Route path="/login" element={<LogIn handleToken={handleToken} />} />
        <Route
          path="/publish"
          element={<Publish handleToken={handleToken} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

