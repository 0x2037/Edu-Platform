import React from "react";
import styles from "../Styles/Avatar.module.scss";

import { Link } from "react-router-dom";
const Avatar = () => {
  return (
    <div className={styles.profile}>
      <Link className={styles.profile1} to="/profile">
        <img
          id={styles.profileAvatar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4mPGMHHcMy-0LbI_oY1mAS6MCWMdxklaaA&usqp=CAU"
        />
        <p>Dorian Popa</p>
      </Link>
    </div>
  );
};

export default Avatar;
