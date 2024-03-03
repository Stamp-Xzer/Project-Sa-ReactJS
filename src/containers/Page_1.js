import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import Header from "../components/Header.js"; // Adjusted import path for Headers
import Footer from "../components/Footer.js"; // Adjusted import path for Headers
import axios from "axios";
import React, { Component } from "react";

class Page_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subStudents: [],
      sumByCategoryIDBB: {}, // เพิ่ม sumByCategoryID เป็น state
    };
  }

  componentDidMount() {
    // เรียก API เพื่อดึงข้อมูล sub_student
    axios
      .post("http://localhost:3301/sub_student", {
        StudentID: localStorage.getItem("student_id"),
      })
      .then((response) => {
        const sumByCategoryID = response.data.reduce(
          (accumulator, currentValue) => {
            const { CategoryID, CreditHours } = currentValue;
            accumulator[CategoryID] =
              (accumulator[CategoryID] || 0) + parseInt(CreditHours);
            return accumulator;
          },
          {}
        );

        this.setState({
          subStudents: response.data,
          sumByCategoryIDBB: sumByCategoryID, // เซ็ตค่า sumByCategoryID ให้กับ state
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // ดำเนินการเกี่ยวกับข้อผิดพลาดตามที่คุณต้องการ
      });
  }

  handleDelete = (courseID) => {
    const isConfirmed = window.confirm("คุณแน่ใจหรือไม่ที่ต้องการลบรายการนี้?");

    if (isConfirmed) {
      axios
        .delete(`http://localhost:3301/del_sub_from`, {
          data: {
            stu_id: localStorage.getItem("student_id"),
            c_id: courseID,
          },
        })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

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
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <ion-icon name="log-out-outline"></ion-icon>
                </div>
                <Link to="/">
                  <span className="link-text">Logout</span>
                </Link>
              </a>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <Header Head="ระบบคำนวณหน่วยกิตสาขาวิชา IT" />
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
              <h2>รวมหน่วยกิตทั้งหมด</h2>
            </div>
            <div className="col">
              <h2>หน่วยกิตที่ต้องการ</h2>
              <h5>
                {(this.state.sumByCategoryIDBB &&
                  this.state.sumByCategoryIDBB[1]) ||
                  0}
                /5
              </h5>
              <h5>
                {(this.state.sumByCategoryIDBB &&
                  this.state.sumByCategoryIDBB[2]) ||
                  0}
                /6
              </h5>
              <h5>
                {(this.state.sumByCategoryIDBB &&
                  this.state.sumByCategoryIDBB[3]) ||
                  0}
                /13
              </h5>
              <h5>
                {(this.state.sumByCategoryIDBB &&
                  this.state.sumByCategoryIDBB[4]) ||
                  0}
                /3
              </h5>
              <h5>
                {(this.state.sumByCategoryIDBB &&
                  this.state.sumByCategoryIDBB[5]) ||
                  0}
                /3
              </h5>
              <h4>
                {(this.state.sumByCategoryIDBB &&
                  this.state.sumByCategoryIDBB[6]) ||
                  0}
                /90
              </h4>
              <h2>
                {Object.values(this.state.sumByCategoryIDBB).reduce(
                  (total, credits) => total + credits,
                  0
                )}
              </h2>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-8"></div>
            <Link to="/add_sub" className="btn btn-primary col-4">
              เพิ่มวิชาที่ลงทะเบียน
            </Link>
          </div>
          <br />
          <table className="table table-striped-columns">
            <thead>
              <tr>
                <th scope="col">รหัสวิชา</th>
                <th scope="col">ชื่อวิชา</th>
                <th scope="col">หน่วยกิต</th>
                <th scope="col">ปีการศึกษา/ภาค</th>
              </tr>
            </thead>
            <tbody>
              {this.state.subStudents.map((subStudent) => (
                <tr key={subStudent.CourseID}>
                  <td>{subStudent.CourseID}</td>
                  <td>{subStudent.CourseName}</td>
                  <td>{subStudent.CreditHours}</td>
                  <td>{subStudent.Semester}</td>
                  <td
                    className="text-danger"
                    onClick={() => this.handleDelete(subStudent.CourseID)}
                  >
                    <i className="bi bi-archive-fill"> ลบ</i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default Page_1;
