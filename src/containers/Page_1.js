import withAuth from "../containers/error/auth.js"; // Adjusted import path for withAuth
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import Header from "../components/Header.js"; // Adjusted import path for Headers
import Footer from "../components/Footer.js"; // Adjusted import path for Headers

import React, { Component } from "react";

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
        <Header Head="ระบบคำนวณหน่วยกิต" />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h2>หมวดหมู่วิชา</h2>
              <h5>กลุ่มสาระอยู่ดีมีสุข</h5>
              <h5>กลุ่มสาระศาสตร์แห่งผู้ประกอบการ</h5>
              <h5>กลุ่มสาระภาษากับการสื่อสาร</h5>
              <h5>กลุ่มสาระพลเมืองไทยและพลเมืองโลก</h5>
              <h5>กลุ่มสาระสุนทรียศาสตร์</h5>
              <h4>หมวดวิชาเฉพาะ</h4>
            </div>
            <div className="col">
              <h2>หน่วยกิตที่ต้องการ</h2>
              <h5>10/5</h5>
              <h5>0/6</h5>
              <h5>0/13</h5>
              <h5>0/3</h5>
              <h5>0/3</h5>
              <h4>0/90</h4>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-8"></div>
            <button type="button" class="btn btn-primary col-4">
              เพิ่มวิชาที่ลงทะเบียน
            </button>
          </div>
          <br />
          <table class="table table-striped-columns">
            {" "}
            <thead>
              <tr>
                <th scope="col">รหัสวิชา</th>
                <th scope="col">ชื่อวิชา</th>
                <th scope="col">หน่วยกิต</th>
                <th scope="col">ปีการศึกษา/ภาค</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default withAuth(Page_1);
