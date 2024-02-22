import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import Header from "../Header.js"; // Adjusted import path for Headers
import Footer from "../Footer.js"; // Adjusted import path for Headers

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null,
      loading: true,
    };
  }

  componentDidMount() {
    const emaila = localStorage.getItem("email");
    console.log("email", emaila);
    axios
      .get(`http://localhost:3301/student`, {
        params: {
          email: emaila,
        },
      })
      .then((response) => {
        this.setState({ student: response.data, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, student } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!student) {
      return <div>No student found</div>;
    }

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
        <Header Head="โปรไฟล์" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="col-md-12 text-center">
                <div className="avatar-circle">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/509/509720.png"
                    className="img-fluid"
                    alt="Avatar"
                  ></img>
                </div>
                <br />
                <h3>
                  รหัสนิสิต : {student.StudentID}
                  <br />
                  ชื่อจริง-นามสกุล : {student.f_name} {student.l_name}
                  <br />
                  สาขา :{" "}
                  {student.Marjor === "it"
                    ? "เทคโนโลยีสารสนเทศ"
                    : student.Marjor}
                  <br />
                  คณะ :{" "}
                  {student.Faculty === "AS"
                    ? "คณะศิลปศาสตร์และวิทยาศาสตร์"
                    : student.Faculty}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default ProfilePage;
