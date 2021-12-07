import React from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="A variety of meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
