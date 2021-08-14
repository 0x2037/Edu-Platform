import React from "react";
import styles from "../Styles/CouseItem.module.scss";
import {Link} from 'react-router-dom';
import Card from "./Card";

const CourseItem = (props) => {
  return (
    <Link className={styles.container}>
      <Card className={styles.courseItem}>
        <div className={styles.leftContent}>
          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        </div>
        <div className={styles.rightContent}>
          <h1>Titlu curs</h1>
          <p>
            Acesta este un curs misto.Acesta este un curs misto.Acesta este un
            curs misto.
          </p>
          <div className={styles.loadingBar}>
              <div className={styles.back}></div>
              <div className={styles.front}>
                  <p>20%</p>
              </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseItem;
