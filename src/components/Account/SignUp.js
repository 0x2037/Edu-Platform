import React from "react";
import { Button } from "react-bootstrap";
import styles from "../Styles/SignUp.module.scss";

import Card from "../UI/Card";
import Form from "../UI/Form";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className={styles.account}>
        <Link to='/'><Button id={styles.backBtn}><i class="fas fa-arrow-left"></i>Inapoi</Button></Link>
      <Card className={styles.accountCard}>
          <h1>Creaza un cont</h1>
        <Form>
          <label htmlFor="nume">Nume Prenume</label>
          <input id="nume" type="text" placeholder="John" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="john@gmail.com" />
          <label htmlFor="parola">Parola</label>
          <input id="parola" type="password" />
          <label htmlFor="confirmareParola">Confirmare parola</label>
          <input id="confirmareParola" type="password" />
          <Button type='submit'>Create Account</Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
