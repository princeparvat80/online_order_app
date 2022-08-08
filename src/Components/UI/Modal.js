import React, { Fragment } from "react";
import classes from "./UI_Css/Modal.module.css";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.hideCartHandler}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  const portalposition = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop hideCartHandler={props.hideCartHandler}/>, portalposition)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalposition
      )}
    </Fragment>
  );
}

 // eslint-disable-next-line no-lone-blocks
 {/* 
 React portals provide a first-class way to render and allow child components,
 which are typically present outside the DOM, to live within a Document Object
 Model (DOM) node. This React portal component exists outside the DOM hierarchy
 of the parent component. A portal added in index.html
*/}
