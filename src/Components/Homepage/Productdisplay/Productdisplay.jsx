import React, { Component } from "react";
import ProductImage from "./../../../Assets/Images/BrandLogo/product.jpg";
export class Productdisplay extends Component {
  render() {
    return (
      <header className="maindisplay">
        <div className="HomeDisplay">
          <div className="site-nav">
            <a className="product-type" href="#">
              Electronic Devices
            </a>

            <a className="product-type" href="#">
              Electronic Accessories
            </a>

            <a className="product-type" href="#">
              TV & Home Appliances
            </a>

            <a className="product-type" href="#">
              Health & Beauty
            </a>

            <a className="product-type" href="#">
              Babies & Toys
            </a>

            <a className="product-type" href="#">
              Groceries & Pets
            </a>

            <a className="product-type" href="#">
              Home & lifestyle
            </a>

            <a className="product-type" href="#">
              Women's Fashion
            </a>

            <a className="product-type" href="#">
              Men's Fashion
            </a>

            <a className="product-type" href="#">
              Watches & Accessories
            </a>

            <a className="product-type" href="#">
              Sports & Outdoor
            </a>

            <a className="product-type" href="#">
              Automotive & Motorbike
            </a>
          </div>
          <div className="product-display">
            <img src={ProductImage} alt="#" className="product" />
          </div>
        </div>
      </header>
    );
  }
}

export default Productdisplay;
