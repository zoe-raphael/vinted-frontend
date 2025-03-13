// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [token, setToken] = useState(Number(Cookies.get("token")) || 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newsletter, setnewsletter] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleNewsletterChange = (event) => {
    const value = event.target.value;
    setnewsletter(value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: response.data.email,
          username: response.data.account.username,
          newsletter: response.data.newsletter,
          password: response.data.password,
          //   token: data.token,
        }
      );

      Cookies.set("token", token, { expires: 3 });
      setToken(response.data.token);

      navigate("/home");
    } catch (error) {
      alert(error);
      //   error.message;
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          value={username}
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
          onChange={handleUsernameChange}
        />
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChange}
        />
        <input
          value={newsletter}
          type="checkbox"
          name="newsletter"
          id="newsletter"
          onChange={handleNewsletterChange}
        />
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
