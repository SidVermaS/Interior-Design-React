import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import { Link } from "react-router-dom";
import { PathE, ResponsiveE, URLE } from "../../utils/constants";
import logo from "../../assets/images/logo.png";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { MenuItemI } from "../../utils/interfaces";
import Hamburger from "../../assets/images/hamburger.png";
import Cross from "../../assets/images/cross.png";
import { openMenu, closeMenu } from "../../redux/reducers/menu.reducer";
const menuItems: MenuItemI[] = [
  {
    link: "/about",
    title: "About us",
  },
  {
    link: "/projects",
    title: "Projects",
  },
  {
    link: "/career",
    title: "Career",
  },
  {
    link: "/contacts",
    title: "Contacts",
  },
];
const NavigationBar = () => {
  const [currentLang, setCurrentLang] = React.useState<string>("En");
  const [width,] = useWindowSize();
  const { menu } = useSelector((state: any) => state.menu);
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = React.useState<string>(
    menuItems[0].link
  );
  const toggleMenu = React.useCallback(() => {
    if (menu) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  }, [menu]);
  const switchLanguage = React.useCallback(
    (tempLanguage: string) => {
      setCurrentLang(tempLanguage);
    },
    [currentLang]
  );
  return width <= ResponsiveE.Mobile ? (
    <nav className={`${styles.navMobile} ${menu && styles.navFullHeight}`}>
      <div className={styles.icons}>
        <Link to={PathE.Home}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <img
          onClick={toggleMenu}
          className={styles.hamburgerIcon}
          src={menu ? Cross : Hamburger}
          alt="toggle"
        />
      </div>
      {menu && (
        <>
          <div className={styles.menu}>
            {menuItems.map((menuItem: MenuItemI) => (
              <Link
                key={menuItem.link}
                to={menuItem.link}
                className={styles.link}
                onClick={() => setSelectedMenu(menuItem.link)}
              >
                <div
                  className={
                    selectedMenu === menuItem.link
                      ? styles.selectedTitle
                      : styles.title
                  }
                >
                  {menuItem.title}
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.dFlex}>
            <div
              onClick={() => switchLanguage("En")}
              className={
                "En" === currentLang ? styles.selectedLang : styles.lang
              }
            >
              En
            </div>
            <div className={styles.lang}>&nbsp;|&nbsp;</div>
            <div
              onClick={() => switchLanguage("Fr")}
              className={
                "Fr" === currentLang ? styles.selectedLang : styles.lang
              }
            >
              Fr
            </div>
          </div>
        </>
      )}
    </nav>
  ) : (
    <nav className={styles.nav}>
      <Link to={PathE.Home}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.menu}>
        <div className={styles.menuItems}>
          {menuItems.map((menuItem: MenuItemI) => (
            <Link
              key={menuItem.link}
              to={menuItem.link}
              className={styles.link}
            >
              <div className={styles.title}>{menuItem.title}</div>
            </Link>
          ))}
        </div>
        <div className={styles.text}>En</div>
      </div>
    </nav>
  );
};

export default NavigationBar;
