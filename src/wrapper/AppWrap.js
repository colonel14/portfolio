import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { useLocation } from "react-router-dom";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const { pathname } = useLocation();

    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2020 Abdallah</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        {pathname === "/" ? <NavigationDots active={idName} /> : ""}
      </div>
    );
  };

export default AppWrap;
