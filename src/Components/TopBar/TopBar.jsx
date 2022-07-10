import React, { Component } from "react";

export class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <div className="topBar__content">
          <a href="#" className="content__link active__link">
            Save More On App
          </a>
          <a href="#" className="content__link">
            Sell on Daraz
          </a>
          <a href="#" className="content__link">
            Customer Care
          </a>
          <a href="#" className="content__link">
            Track My Order
          </a>
          <a href="#" className="content__link">
            Login
          </a>
          <a href="#" className="content__link">
            Sign Up
          </a>
          <a href="#" className="content__link">
            भाषा परिवर्तन
          </a>
        </div>
      </div>
    );
  }
}

export default TopBar;
