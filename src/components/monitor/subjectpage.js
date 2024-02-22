import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import Header from "../Header.js"; // Adjusted import path for Headers
import Footer from "../Footer.js"; // Adjusted import path for Headers
import axios from "axios";
import React, { Component } from "react";

class SubjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: "", // เพิ่ม state เพื่อเก็บค่า categoryID
      courses: [], // เพิ่ม state เพื่อเก็บข้อมูลวิชา
    };
  }

  handleSelectChange = (event) => {
    const categoryID = event.target.value;
    this.setState({ categoryID }); // เมื่อมีการเลือกใน dropdown ให้อัปเดตค่า categoryID
    axios
      .post("http://localhost:3301/courses", { categoryID })
      .then((response) => {
        console.log(response.data); // พิมพ์ข้อมูลที่ได้รับจาก server ใน console เพื่อทดสอบ
        this.setState({ courses: response.data }); // อัปเดต state ข้อมูลวิชา
      })
      .catch((error) => {
        console.error("Error:", error);
        // ดำเนินการเกี่ยวกับข้อผิดพลาดตามที่คุณต้องการ
      });
  };
  render() {
    const { courses } = this.state; // เพิ่มการเรียกใช้งาน state ของ courses ใน render() method

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
        <Header Head="วิชาของแต่ละหมวดหมู่" />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <select
                className="form-select custom-select col-md-4"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={this.handleSelectChange} // เพิ่ม event handler เมื่อมีการเลือกใน dropdown
              >
                <option selected>เลือกหมวดหมู่วิชา</option>
                <option value="1">อยู่ดีมีสุข</option>
                <option value="2">ศาสตร์แห่งผู้ประกอบการ</option>
                <option value="3">ภาษากับการสื่อสาร</option>
                <option value="4">พลเมืองไทยและพลเมืองโลก</option>
                <option value="5">สุนทรียศาสตร์</option>
              </select>
              <br />
              <br />
              <table className="table table-striped-columns">
                <thead>
                  <tr>
                    <th scope="col">รหัสวิชา</th>
                    <th scope="col">ชื่อวิชา</th>
                    <th scope="col">หน่วยกิต</th>
                    <th scope="col">หมวดหมู่วิชา</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.CourseID}>
                      <td>{course.CourseID}</td>
                      <td>{course.CourseName}</td>
                      <td>{course.CreditHours}</td>
                      <td>{course.CategoryName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default SubjectPage;
