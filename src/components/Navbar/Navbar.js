import React,{useState} from "react";
import styles from "../Styles/Navbar.module.scss";

import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

import {useSelector} from 'react-redux';
import AccountBtn from './AccountBtn';
import Avatar from "../UI/Avatar";
const Navbar = () => {

  //variable for showing mobile navbar when clicked
  const [toggle,setToggle]=useState(false);

  //variable for showing avatar or login buttons with REDUX
  const isAuth=useSelector(state=>state.auth.isAuthenticated);

  const closeToggle=()=>{
    setToggle(!toggle);
  }

  let mobileToggle=null;
  if(toggle){
    mobileToggle=<MobileNav closeToggle={closeToggle}/>
  }
  else{
    mobileToggle=null;
  }

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
        <Link className={styles.links} to="/shop">
          <i class="fas fa-shopping-bag"></i>
          <p>Store</p>
        </Link>
      </div>
      {isAuth ? <Avatar /> : <AccountBtn />}
      <button id={styles.navbarToggle} onClick={closeToggle}><i class="fas fa-bars"></i></button>
      {mobileToggle}
    </nav>
  );
};

export default Navbar;
