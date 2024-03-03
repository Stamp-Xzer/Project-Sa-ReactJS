import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import axios from "axios";
import React, { Component } from "react";

class SubjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: "",
      courses: [],
      sortOrder: "asc", // เพิ่มสถานะสำหรับการเรียงลำดับข้อมูล
      searchValue: "", // เพิ่มสถานะสำหรับค่าค้นหา
    };
  }

  componentDidMount() {
    this.fetchCourses();
  }

  fetchCourses = () => {
    axios
      .get("http://localhost:3301/courses")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleSelectChange = (event) => {
    const categoryID = event.target.value;
    this.setState({ categoryID });
    axios
      .post("http://localhost:3301/courses", { categoryID })
      .then((response) => {
        console.log(response.data);
        this.setState({ courses: response.data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  toggleSortOrder = () => {
    this.setState((prevState) => ({
      sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc",
    }));
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { courses, searchValue } = this.state;

    const filteredCourses = courses.filter((course) => {
      return (
        course.CourseID.includes(searchValue) ||
        course.CourseName.includes(searchValue)
      );
    });

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
        <Header Head="วิชาของแต่ละหมวดหมู่" />
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <select
                className="form-select custom-select col-md-4"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={this.handleSelectChange}
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
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ค้นหา รหัสวิชา หรือชื่อวิชา"
                  value={searchValue}
                  onChange={this.handleInputChange}
                />
              </div>
              <button className="btn btn-info" onClick={this.toggleSortOrder}>
                {this.state.sortOrder === "asc"
                  ? "หน่วยกิตเรียงจากน้อยไปมาก"
                  : "หน่วยกิตเรียงจากมากไปน้อย"}
              </button>
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
                  {filteredCourses
                    .sort((a, b) => {
                      if (this.state.sortOrder === "asc") {
                        return a.CreditHours - b.CreditHours;
                      } else {
                        return b.CreditHours - a.CreditHours;
                      }
                    })
                    .map((course) => (
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
