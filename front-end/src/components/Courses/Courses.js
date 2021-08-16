import React, { Fragment, useState, useEffect } from "react";
import styles from "../Styles/Courses.module.scss";

import Card from "../UI/Card";
import CourseItem from "../UI/CourseItem";
import LoadingPage from "../UI/LoadingPage";
import { Container, Row, Col } from "react-bootstrap";
const Courses = () => {
  //declaring variables with useState
  const [cousersesList, setCoursesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //function for fetching data
  const fetchCoursesHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("");
      if (!response.ok) throw new Error("Somethign went wrong");
      const data = response.json();

      // const transformedCourses = data.map((course) => {
      //   id: course.id;
      // });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchCoursesHandler();
  // }, [fetchCoursesHandler]);

  return (
    <Fragment>
      {isLoading && <LoadingPage />}
      <Card className={styles.coursesContent}>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </Card>
    </Fragment>
  );
};

export default Courses;
