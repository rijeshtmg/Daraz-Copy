import React, { Component } from "react";
import darazMall from "./../../Assets/Images/Shortcut/darazMall.png";
import ads from "./../../Assets/Images/BrandLogo/ads.png";
export class homepage extends Component {
  render() {
    return (
      <div className="product-hero">
        <div className="discount-comp">
        <img src={ads} alt="#" className="Ads"/>
        </div>
        <div className="shortcut-comp">
          <a href="#" className="shortcut">
            DarazMall
          </a>
          <a href="#" className="shortcut">
            dMart
          </a>
          <a href="#" className="shortcut">
            Recharge & eStore
          </a>
          <a href="#" className="shortcut">
            Stay Informed
          </a>
          <a href="#" className="shortcut">
            Register as seller
          </a>
        </div>
        <div className="daraz-mall">
          <div className="name">DarazMall</div>
          <div className="shop-now">Shop Now </div>
        </div>
        <div className="product">
          <div className="product-cont">
            <div class="grid-1"></div>
            <div class="grid-2"></div>
            <div class="grid-3"></div>
            <div class="grid-4"></div>
            <div class="grid-5"></div>
            <div class="grid-6"></div>
          </div>
        </div>
        <div className="Collection">
          <div className="name-1">Collections</div>
          <div className="shop-now-1">Shop Now </div>
        </div>
        <div className="product1">
          <div className="product-cont1">
            <div class="grid-7"></div>
            <div class="grid-8"></div>
            <div class="grid-9"></div>
            <div class="grid-10"></div>
            <div class="grid-11"></div>
            <div class="grid-12"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default homepage;
