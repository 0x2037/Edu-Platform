import React, { Fragment, useState, useEffect, useCallback } from "react";
import styles from "../Styles/Shop.module.scss";
import Benefit from "./Benefit";

import { Link } from "react-router-dom";
import Button from "../UI/Button";
import SelectedBenefit from "./SelectedBenefit";
import { useDispatch, useSelector } from "react-redux";
import { shopActions } from "../../redux/shop";
const Shop = () => {
  const dispatch = useDispatch();
  const [benefitsList, setBenefitsList] = useState([
    { id: "23", name: "test", price: 20 },
    { id: "33", name: "test", price: 20 },
  ]);
  const selectedBenefits = useSelector((state) => state.shop.selectedBenefits);
  const totalPrice = useSelector((state) => state.shop.totalPrice);
  const selectBenefitHandler = (data) => {
    dispatch(shopActions.selectBenefit(data));
  };

  const fetchBenefitData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/employee");
      if (!response.ok)
        throw new Error("something went wrong with benefits fetch");
      const data = await response.json();
      setBenefitsList(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchBenefitData();
  }, [fetchBenefitData]);

  return (
    <div className={styles.shop}>
      <div className={styles.shopContent}>
        <div className={styles.benefits}>
          {benefitsList.map((benefit) => (
            <Benefit
              key={benefit.id}
              id={benefit.id}
              name={benefit.name}
              price={benefit.price}
              onClick={() => selectBenefitHandler(benefit)}
            />
          ))}
        </div>
        <div className={styles.selectedBenefits}>
          <h1 id={styles.beneficiiHeader}>Beneficii selectate</h1>
          {selectedBenefits.map((benefit) => (
            <SelectedBenefit
              key={benefit.id}
              id={benefit.id}
              name={benefit.name}
              price={benefit.price}
            />
          ))}
        </div>
      </div>
      <div className={styles.shopFooter}>
        <p>
          Selecteaza beneficiile dorite. Odata selectate, vei putea vedea pretul
          total. Apasa “Plateste” pentru a fi redirectionat catre
          plata.Foloseste scroll pentru a vedea mai multe beneficii.
        </p>
        <div className={styles.total}>
          <p>Total</p>
          <p>{totalPrice}</p>
        </div>
        <Link to="#">
          <Button id={styles.plateste}>Plateste</Button>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
