// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [token, setToken] = useState(Number(Cookies.get("token")) || 0);

  const submitForm = async () => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: data.email,
          username: data.account.username,
          newsletter: data.newsletter,
          //   token: data.token,
        }
      );

      Cookies.set("token", { expires: 3 });
      setToken(response.data.token);

      //   Cookies.set("userToken", response.data.token);
      //   setToken(response.data.token);
      navigate("/signup");
    } catch (error) {
      alert(error.response);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
        />
        <input type="checkbox" name="newsletter" id="newsletter" />
        <p>S'inscrire à la newsletter</p>
        <button id="submit-btn" type="submit">
          S'inscrire
        </button>
        {/* <Link to={"/connect"}>Connection</Link> */}
      </form>
    </div>
  );
};
export default Signup;
