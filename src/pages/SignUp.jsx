import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [userToken, setUserToken] = useState(Number(Cookies.get("token")) || 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (event, setState, type) => {
    if (type === "text") {
      setState(event.target.value);
    } else {
      setState((prev) => !prev);
    }
  };
  // paramétrable pour min, maj etc
  // event.target.id etc

  return (
    <main>
      <div className="container">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                {
                  email,
                  username,
                  password,
                  newsletter: false,
                }
              );
              // console.log(response.data);

              //   token: data.token,
              if (response.data.token) {
                Cookies.set("token", response.data.token);
                setUserToken(response.data.token);
                navigate("/home");
              } else {
                setErrorMessage("Email ou mot de passe incorrect");
              }

              // navigate("/home");
            } catch (error) {
              if (error.response.status === 409) {
                setErrorMessage("Email ou username déjà pris");
              } else {
                setErrorMessage("Les informations saisies sont incorrectes");
              }
              console.log(error.response);
            }
            //   error.message; // pour le backend
          }}
        >
          <input
            value={username}
            type="text"
            name="username"
            id="username"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              handleChange(event, setUsername, "text");
            }}
          />
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(event) => {
              handleChange(event, setEmail, "text");
            }}
          />
          <input
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              handleChange(event, setPassword, "text");
            }}
          />
          <input
            checked={newsletter}
            type="checkbox"
            name="newsletter"
            id="newsletter"
            onChange={(event) => {
              handleChange(event, setNewsletter, "checkbox");
            }}
          />
          <p>S'inscrire à la newsletter</p>
          <button id="submit-btn" type="submit">
            S'inscrire
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <Link to="/login">Déjà un compte ? Se connecter </Link>
        </form>

        <div></div>
      </div>
    </main>
  );
};
export default Signup;
