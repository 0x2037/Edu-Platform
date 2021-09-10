import React, { Fragment } from "react";
import styles from "../Styles/About.module.scss";
import Card from "../UI/Card";

const About = () => { 
  return (
    <Fragment className={styles.container}>
      <Card className={styles.cardContent}>
        <div className={styles.leftContent}>
          <h1>Cine suntem?</h1>
          <p>
            Salut! Suntem o echipa mica formata din studenti pasionati de
            tehnologie si tot ce tine de aceasta. Acest website este primul
            proiect al echipei.
          </p>
        </div>
        <div className={styles.rightContent}>
          <h1>Ce este acest site?</h1>
          <p>
            Va punem la dispozitie o platforma de e-learning destinata atat
            dobandirii, cat si aprofundarii aptitudinilor de cybersecurity, prin
            intermediul tutorialelor detaliate. 
          </p>
        </div>
      </Card>

    </Fragment>
  );
};

export default About;
