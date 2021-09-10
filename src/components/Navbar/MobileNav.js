import React from "react";
import styles from "../Styles/MobileNav.module.scss";

import { Link } from "react-router-dom";
const MobileNav = (props) => {
  return (
    <div className={styles.mobileNav}>
        <button onClick={props.closeToggle} id={styles.closeBtn}><i class="fas fa-times"></i></button>
      <Link className={styles.links} to="/" onClick={props.closeToggle}>
        <h1>About</h1>
      </Link>
      <Link className={styles.links} to="/courses" onClick={props.closeToggle}>
        <h1>Courses</h1>
      </Link>
      <Link className={styles.links} to="/store" onClick={props.closeToggle}>
        <h1>Store</h1>
      </Link>
      <Link className={styles.profile} to="/profile" onClick={props.closeToggle}>
          <img
            id={styles.profileAvatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4mPGMHHcMy-0LbI_oY1mAS6MCWMdxklaaA&usqp=CAU"
          />
          <p>Dorian Popa</p>
        </Link>
    </div>
  );
};

export default MobileNav;
