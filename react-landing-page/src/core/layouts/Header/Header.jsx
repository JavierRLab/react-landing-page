import React from "react";

import { NavBar } from "./NavBar/NavBar";
import  logoSrc from "assets/img/fcc_primary_large.svg"

export function Header(props) {
  return (
    <header id="header">
      <img src={logoSrc} alt="freeCodeCamp logo" id="header-img"></img>
      <NavBar/>
    </header>
  )
}