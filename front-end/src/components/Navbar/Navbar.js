import React from "react";
import styles from "../Styles/Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <Link className={styles.logoContent} to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className={styles.search}>
        <i class="fas fa-search"></i>
        <input type="text" />
      </div>
      <div className={styles.linksSection}>
        <Link className={styles.links } to="/about">
          <i class="fas fa-user-friends"></i>
          <p>About</p>
        </Link>
        <Link className={styles.links} to="/courses">
          <i class="fas fa-graduation-cap"></i>
          <p>Courses</p>
        </Link>
        <Link className={styles.links} to="/store">
          <i class="fas fa-shopping-bag"></i>
          <p>Store</p>
        </Link>
      </div>
      <div className={styles.profile}>
        <Link className={styles.profile1} to="/profile">
          <img
            id={styles.profileAvatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4mPGMHHcMy-0LbI_oY1mAS6MCWMdxklaaA&usqp=CAU"
          />
          <p>Dorian Popa</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
