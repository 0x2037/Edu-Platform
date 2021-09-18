import React from "react";
import styles from "../Styles/ProfileNav.module.scss";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../redux/profile";
import Avatar from "../UI/Avatar";

const ProfileNav = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.profile.page);
  return (
    <div className={styles.profileNav}>
      <Link
        id={`${currentPage === "profile" ? styles.activeLink : ""}`}
        className={styles.link}
        onClick={() => dispatch(profileActions.changePage("profile"))}
        to="/profile"
      >
          <Avatar className={styles.avatarLink}/>
      </Link>
      <Link
        id={`${currentPage === "progress" ? styles.activeLink : ""}`}
        className={styles.link}
        onClick={() => dispatch(profileActions.changePage("progress"))}
        to="/profile/progress"
      >
        Progres
      </Link>
      <Link
        id={`${currentPage === "settings" ? styles.activeLink : ""}`}
        className={styles.link}
        onClick={() => dispatch(profileActions.changePage("settings"))}
        to="/profile/settings"
      >
        Setarile contului
      </Link>
    </div>
  );
};

export default ProfileNav;
