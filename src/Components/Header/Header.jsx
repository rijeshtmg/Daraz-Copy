import React, { Component } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import BrandLogo from "./../../Assets/Images/BrandLogo/brandLogo.png";
import DarazApp from "./../../Assets/Images/BrandLogo/darazApp.png";
export class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <div className="header__content">
          <div className="header__content__left">
            <div className="hcl__brandLink">
              <div className="brandLogo">
                <div className="brandImgCont">
                  <img src={BrandLogo} alt="" className="brandImg" />
                </div>
              </div>
            </div>
          </div>
          <div className="header__content__center">
            <input
              type="text"
              className="headerinput"
              placeholder="Search In Daraz"
            />
            <div className="searchiconCont">
              <FiSearch className="search-icon"></FiSearch>
            </div>
            <div className="carticonCont">
              <FiShoppingCart className="cart-icon"></FiShoppingCart>
            </div>
          </div>

          <div className="header__content__right">
            <div className="hcr__downloadLink">
              <img src={DarazApp} alt="" className="downloadimage" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
