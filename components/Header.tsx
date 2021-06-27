import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useMediaQuery } from "./_utils/CustomHooks/useMediaQuery";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [width] = useMediaQuery();

  return (
    <header className={styles.header}>
      <nav className={styles.header__navbar}>
        <Link href="/">
          <span
            className={styles.header__logo}
            onClick={() => setToggle(false)}
          >
            Tahir
          </span>
        </Link>
        <div>
          <input
            type="checkbox"
            checked={toggle}
            id="header__checkbox"
            className={`${styles.header__checkbox}`}
            onChange={() => (toggle ? setToggle(false) : setToggle(true))}
          />
          <label htmlFor="header__checkbox">
            {toggle ? (
              <AiOutlineClose className={`${styles.header__hamburger}`} />
            ) : (
              <AiOutlineMenu className={`${styles.header__hamburger}`} />
            )}
          </label>
        </div>
        <div
          className={styles.header__links__container}
          style={{
            display: toggle || width > 800 ? "block" : "none",
            transformOrigin: "top",
            translate: "transform .5s ease-in-out",
          }}
        >
          <ul className={`${styles.header__links__list}`}>
            <li
              className={styles.header__links}
              onClick={() => setToggle(false)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={styles.header__links}
              onClick={() => setToggle(false)}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={styles.header__links}
              onClick={() => setToggle(false)}
            >
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
