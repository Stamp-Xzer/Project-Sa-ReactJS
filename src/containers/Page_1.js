import React, { Component } from "react";
import withAuth from "../containers/error/auth.js"; // Adjusted import path for withAuth
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import Headers from "../components/Header.js"; // Adjusted import path for Headers
import Footer from "../components/Footer.js"; // Adjusted import path for Headers

class Page_1 extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav id="navbar">
          <ul className="navbar-items flexbox-col">
            <li className="flexbox-left">
              <a className="navbar-item-inner flexbox">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/KU_SubLogo.png"
                  className="img-fluid"
                  alt="KU logo"
                ></img>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
                <Link to="/page1">
                  <span className="link-text">Home</span>
                </Link>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="person-outline"></ion-icon>
                </div>
                <Link to="/page2">
                  <span className="link-text">Profile</span>
                </Link>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="document-text-outline"></ion-icon>
                </div>
                <Link to="/page3">
                  <span className="link-text">Subject</span>
                </Link>
              </a>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        {/* <div className="container-md">
          <h1 className="text-center">Welcome to the Home Page</h1>
          <p className="text-center">
            This is the home page. You can navigate to other pages using the
            navigation bar on the left.
          </p>
        </div> */}
        <Headers />
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default withAuth(Page_1);
