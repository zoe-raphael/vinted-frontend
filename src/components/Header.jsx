import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Range } from "react-range";
import { useState } from "react";
import React from "react";
// import LabeledTwoThumbsExample from "../../node_modules/react-range/lib/types";

const Header = ({
  setUser,
  userToken,
  title,
  setTitle,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  rtl,
}) => {
  const existingToken = userToken;
  const [values, setValues] = useState([50]);

  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo vinted" />
          </Link>
        </div>
        <div className="left-header">
          {/* <Range 
          {
            class Range extends React.Component {
              render() {
                return (
                  <div
                    label="Select your value"
                    step={0.1}
                    min={0}
                    max={100}
                    values={values}
                    onChange={(event) => setValues(event.target.value)}
                  ></div>
                );
              }
            }
          }/> */}
        </div>
        <div className="sign">
          {existingToken ? (
            <button
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to={"/signup"}>S'inscrire</Link>
              <Link to={"/login"}>Se connecter</Link>
            </>
          )}

          <button>Vends tes articles</button>
        </div>
      </header>
    </div>
  );
};

{
  /* // export const ({ rtl }) => (

//   <LabeledTwoThumbsExample rtl={rtl} />

// ); */
}

export default Header;
