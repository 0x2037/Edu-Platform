import React, { useState, Fragment } from "react";
import styles from "../Styles/SelectedBenefit.module.scss";

import { useSelector } from "react-redux";
const SelectedBenefit = (props) => {
  

  return (
    <Fragment>
      <div className={styles.selectedBenefit}>
        <p id={styles.benefitName}>{props.name}</p>
        <p id={styles.benefitPrice}>{props.price} RON</p>
      </div>
    </Fragment>
  );
};

export default SelectedBenefit;
