import React from "react";
import styles from "../Styles/ProfileSettings.module.scss";
import Profile from "./Profile";
import Button from "../UI/Button";

const ProfileSettings = () => {
  return (
    <Profile>
      <div className={styles.profileSettings}>
        <div className={styles.changeEmail}>
          <h1>Schimba e-mail</h1>
          <form>
            <input type="text" placeholder="Introduceti vechiul e-mail" />
            <p id={styles.oldEmail}>Adresa trebuie sa contina @</p>
            <input type="text" placeholder="Introduceti nould e-mail" />
            <p id={styles.newEmail}>Adresa trebuie sa contina @</p>
            <input type="password" placeholder="Introduceti parola contului" />
            <Button id={styles.changeEmailBtn} type="submit">
              Schimba e-mail
            </Button>
          </form>
        </div>
        <div className={styles.changePassword}>
          <h1>Schimba parola</h1>
          <form>
            <input type="password" placeholder="Introduceti parola actuala a contului" />
            <input type="password" placeholder="Introduceti noua parola" />
            <ul>
                <li>minim 16 caractere</li>
                <li>minim o cifra</li>
                <li>minim un caracter special</li>
                <li>minim o majuscula</li>
            </ul>
            <input type="password" placeholder="Comfirmati noua parola" />
            <p>Parola nu se potriveste cu cea introdusa in campul anterior</p>
            <Button id={styles.changeEmailBtn} type="submit">
              Schimba parola
            </Button>
          </form>
        </div>
      </div>
    </Profile>
  );
};

export default ProfileSettings;
