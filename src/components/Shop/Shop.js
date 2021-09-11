import React, { Fragment, useState } from "react";
import styles from "../Styles/Shop.module.scss";
import Benefit from "./Benefit";

import { Link } from "react-router-dom";
const Shop = () => {
  const [listBenefits, setListBenefits] = [];
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [test,setTest]=useState('');

  return (
      <div className={styles.shop}>
      </div>
  );
};

export default Shop;
