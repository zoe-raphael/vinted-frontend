import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [userToken, setUserToken] = useState(Number(Cookies.get("token")) || 0);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      handleToken(response.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
          id="email"
          name="email"
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Password"
          id="password"
          name="password"
        />
        <button>Se connecter</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <Link to="/signup">Pas encore de compte ? S'inscrire </Link>
    </div>
  );
};

export default Login;
