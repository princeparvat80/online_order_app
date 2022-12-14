import { Fragment } from "react";
import classes from "../Layout/Layout_Css/Header.module.css";
import headerImage from "../../SharedModules/Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    // Fragment are used to wrap multiple (i.e header and the image div) without adding any extra node to the Dom
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt="Delicious Food"/>
      </div>
    </Fragment>
  );
}
