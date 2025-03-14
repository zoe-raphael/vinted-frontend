import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://lereacteur-vinted-api.herokuapp.com/user/signup"
  //       );
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo vinted" />
          </Link>
        </div>
        <input type="text" placeholder="Rechercher des articles" />
        <div className="sign">
          {/* <button
            onClick={async (event) => {
             
            }}
          >
             <button onClick={navigate("/signup")}>S'inscrire</button> 
          </button>  */}
          <Link to={"/signup"}>Se connecter</Link>

          <button>Vends tes articles</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
