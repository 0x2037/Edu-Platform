import React from "react";
import { Fragment } from "react";
import styles from "../Styles/Form.module.scss";

const Form = (props) => {
  return (
    <Fragment>
      <form className={`${styles.form} ${props.className}`} onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </Fragment>
  );
};

export default Form;
