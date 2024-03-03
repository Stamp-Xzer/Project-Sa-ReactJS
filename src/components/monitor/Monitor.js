import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import ErrorBlockOverlay from "./erroral.js"; // นำเข้าส่วนประกอบใหม่

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      error: null, // เพิ่ม state เพื่อเก็บข้อความผิดพลาด
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    axios
      .post("http://localhost:3301/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("Login successful");
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("student_id", response.data.result[0].StudentID);
        this.props.history.push("/page1");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({ error: "Server is Down" });
        } else if (error.response.status === 401) {
          this.setState({ error: "Invalid email or password" });
        } else {
          console.error("There was an error!", error);
        }
      });
  };

  handleConfirm = () => {
    // ลบข้อความผิดพลาดและเซ็ตค่า state กลับเป็น null
    this.setState({ error: null });
  };

  render() {
    return (
      <form className="container-sm">
        {this.state.error && (
          <ErrorBlockOverlay
            message={this.state.error}
            onConfirm={this.handleConfirm}
          />
        )}{" "}
        {/* แสดง ErrorBlockOverlay ถ้ามี error */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type={this.state.showPassword ? "text" : "password"}
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="showPasswordCheckbox"
            onChange={this.handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="showPasswordCheckbox">
            Show Password
          </label>
        </div>
        <div className="row">
          <div className="container-md text-center">
            <button
              type="button"
              className="btn btn-primary col-4"
              onClick={this.login}
            >
              Login
            </button>
          </div>
          <div className="container-md text-center p-3">
            <Link to="/register" className="btn btn-secondary col-4">
              Register
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Monitor);
