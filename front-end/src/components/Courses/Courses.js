import React, { Fragment,useState } from "react";
import styles from "../Styles/Courses.module.scss";

import Card from "../UI/Card";
import CourseItem from "../UI/CourseItem";
const Courses = () => {

    const [cousersesList,setCoursesList]=useState([]);
  return (
    <Fragment>
      <Card className={styles.coursesContent}>
          
        <div className={styles.leftContent}>
          <CourseItem />
        </div>
        <div className={styles.rightContent}>
          <CourseItem />
        </div>
      </Card>
    </Fragment>
  );
};

export default Courses;
