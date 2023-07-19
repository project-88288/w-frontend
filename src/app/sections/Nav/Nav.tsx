//import { useEffect } from "react"
//import { NavLink, useLocation } from "react-router-dom"
// eslint-disable-next-line
import { useRecoilState } from "recoil"
//import classNames from "classnames/bind"
//import MenuIcon from "@mui/icons-material/Menu"
//import CloseIcon from "@mui/icons-material/Close"
// eslint-disable-next-line
import { mobileIsMenuOpenState } from "components/layout"
//import { useNav } from "app/routes"
//import styles from "./Nav.module.scss"

//const cx = classNames.bind(styles)
const Nav = () => {
  console.log('NAV')
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav

