import React,{useState} from "react";
import styles from "../Styles/Footer.module.scss";

const Footer = () => {

    const [email,setEmail]=useState('')

    const emailChangeHandler=(event)=>{
        setEmail(event.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        //function for posting email to back-end
        setEmail('')
    }
  return (
    <footer>
      <div className={styles.leftContent}>
        <div className={styles.socialMedia}>
          <h1>Social media</h1>
          <div className={styles.socialMediaIcons}>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <div className={styles.phoneNumber}>
            <i class="fas fa-phone"></i>
            <p>+40772222111</p>
          </div>
          <div className={styles.email}>
            <i class="far fa-envelope"></i>
            <p>test@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.middleContent}>
        <h1>Sponsori</h1>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.newsletter}>
          <h1>NewsLetter</h1>
          <input
            type="email"
            placeholder="Fii la curent cu ultimele cursuri!"
            value={email}
            onChange={emailChangeHandler}
          />
          <button onClick={submitHandler}>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
