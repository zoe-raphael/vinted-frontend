import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Range } from "react-range";
import { useState } from "react";
import Cookies from "js-cookie";
// import * as React from "react";
// import LabeledTwoThumbsExample from "../../node_modules/react-range/lib/types";

const Header = ({
  handleToken,
  userToken,
  title,
  setTitle,
  // rtl,
  values,
  setValues,
}) => {
  // const existingToken = userToken;

  const STEP = 0.1;
  const priceMin = 0;
  const priceMax = 300;

  // const values = { product_price };

  // console.log(existingToken); > undefined
  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo vinted" />
          </Link>
        </div>
        <input
          type="text"
          id={title}
          value={title}
          placeholder="Recherche tes articles"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <div className="left-header">
          <Range
            label="Select your value"
            step={1}
            min={0}
            max={300}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "300px",
                  backgroundColor: "black",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#999",
                }}
              />
            )}
          />
          <output style={{ marginTop: "30px" }} id="output">
            {priceMin.toFixed(1)}
            {priceMax.toFixed(1)}
          </output>
        </div>
        <div className="sign">
          {!userToken ? (
            <>
              <Link to={"/signup"}>
                <button>S'inscrire</button>
              </Link>

              <Link to={"/login"}>
                <button>Se connecter</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/publish"}>
                <button>Vends tes articles</button>
              </Link>

              <Link to={"/home"}>
                <button
                  onClick={() => {
                    handleToken();
                  }}
                >
                  Se déconnecter
                </button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
