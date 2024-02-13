import React, { Component } from "react";
import withAuth from "../containers/error/auth.js"; // Adjusted import path for withAuth

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
                ></img>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="home-outline"></ion-icon>
                </div>
                <span className="link-text">Home</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="folder-open-outline"></ion-icon>
                </div>
                <span className="link-text">Projects</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="pie-chart-outline"></ion-icon>
                </div>
                <span className="link-text">Dashboard</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="people-outline"></ion-icon>
                </div>
                <span className="link-text">Team</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="chatbubbles-outline"></ion-icon>
                </div>
                <span className="link-text">Support</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="settings-outline"></ion-icon>
                </div>
                <span className="link-text">Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main id="main" className="flexbox-col">
          <h2>Lorem ipsum!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            corporis, rerum doloremque iste sed voluptates omnis molestias
            molestiae animi recusandae labore sit amet delectus ad
            necessitatibus laudantium qui! Magni quisquam illum quaerat
            necessitatibus sint quibusdam perferendis! Aut ipsam cumque deleniti
            error perspiciatis iusto accusamus consequuntur assumenda. Obcaecati
            minima sed natus?
          </p>
        </main>
      </div>
    );
  }
}

export default withAuth(Page_1);
