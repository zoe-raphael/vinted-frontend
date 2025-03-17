import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      <form>
        <input
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/login",
                {
                  email: email,
                  password: password,
                }
              );
              if (response.data.token) {
                // store token dans cookies
                // changer un state pour actualiser l'affichage dans le header
                // rediriger l'utilisateur vers la page home
              }
            } catch (error) {}
          }}
          type="text"
          onChange={handleEmailChange}
          value={email}
          placeholder="Email"
          id="email"
          name="email"
        />
        <input
          type="text"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Email"
          id="email"
          name="email"
        />
        <button>Se connecter</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <Link to="/signup">Pas encore de compte ? S'inscrire </Link>
    </div>
  );
};

export default Login;
