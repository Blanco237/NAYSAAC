import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

import { headerLinks } from "../../../utils/Links";

import { Divide as Harmburger } from 'hamburger-react'
import { FaCaretDown } from 'react-icons/fa'

const Header = () => {

  const [ isOpen, setIsOpen ] = React.useState(false);

  return (
    <header className={styles.body}>
      <div className={styles.logo}>NAYSAAC</div>
      <nav>
        <ul className={`${styles.nav} ${isOpen? styles.show : styles.hide}`}>
          {headerLinks.map((link, key) => {
            return (
              <Link
                to={link.path}
                key={key + link.path}
                className={`${styles.link} ${link.name==="Donate"? styles.donate : ""}`}
              >
                {link.name}
                {link.dropdown && 
                <div className={styles.dropdown}>
                  {link.dropdown.map((link,index)=> {
                    return <Link to={link.path} key={index + link.path} className={styles.subLink}>{link.name}</Link>
                  })}
                </div>
                }
                {link.dropdown && <span className={styles.caret} ><FaCaretDown /></span>}  
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className={styles.mobileToggle}>
      <Harmburger rounded color="#fff" toggle={setIsOpen} toggled={isOpen}/>
      </div>
    </header>
  );
};

export default Header;
