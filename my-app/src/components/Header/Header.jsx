import React from "react";
import LogoImage from "../../assets/img/logo.svg";
import { menu } from "./nemu";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoImage} alt="" height="35" />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, index) => (
            <li key={`menu item ${index}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button
            className={styles["login-button"]}
            onClick={() => navigate.push("/about")}
          >
            Login
          </button>
          <button className={styles["sing-up-button"]}>Sing up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
