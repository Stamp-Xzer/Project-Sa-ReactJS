import React, { Component } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

class Register_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      studentId: "",
      faculty: "",
      major: "",
      showPassword: false,
      errors: {},
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  validateForm = () => {
    const { email, password, firstName, lastName, studentId, faculty, major } =
      this.state;
    let errors = {};
    let isValid = true;

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }

    if (!firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    }

    if (!lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!studentId) {
      errors.studentId = "Student ID is required";
      isValid = false;
    } else if (!/^\d+$/.test(studentId)) {
      errors.studentId = "Student ID must contain only numbers";
      isValid = false;
    }

    if (!faculty) {
      errors.faculty = "Faculty is required";
      isValid = false;
    }

    if (!major) {
      errors.major = "Major is required";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleRegister = () => {
    const isValid = this.validateForm();
    if (isValid) {
      console.log("Register data:", this.state);
      // Send data to the backend or perform desired actions
    } else {
      console.log("Form validation failed");
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <span className="text-danger">{errors.email}</span>
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              type={this.state.showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.handleCheckboxChange}
            >
              {this.state.showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <span className="text-danger">{errors.password}</span>
        </div>
        <div className="col-md-12">
          <label htmlFor="firstName" className="form-label">
            ชื่อจริง
          </label>
          <input
            type="firstName"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <span className="text-danger">{errors.firstName}</span>
        </div>
        <div className="col-12">
          <label htmlFor="lastName" className="form-label">
            นามสกุล
          </label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            id="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <span className="text-danger">{errors.lastName}</span>
        </div>
        <div className="col-12">
          <label htmlFor="studentId" className="form-label">
            รหัสนิสิต
          </label>
          <input
            type="text"
            className={`form-control ${errors.studentId ? "is-invalid" : ""}`}
            id="studentId"
            name="studentId"
            value={this.state.studentId}
            onChange={this.handleInputChange}
          />
          <span className="text-danger">{errors.studentId}</span>
        </div>
        <div className="col-md-6">
          <label htmlFor="faculty" className="form-label">
            คณะ
          </label>
          <select
            className={`form-select custom-select ${
              errors.faculty ? "is-invalid" : ""
            }`}
            id="faculty"
            name="faculty"
            value={this.state.faculty}
            onChange={this.handleInputChange}
          >
            <option value="">Choose faculty</option>
            <option value="AS">ศิลปศาสตร์และวิทยาศาสตร์</option>
            {/* Add more options as needed */}
          </select>
          <span className="text-danger">{errors.faculty}</span>
        </div>
        <div className="col-md-6">
          <label htmlFor="major" className="form-label">
            สาขา
          </label>
          <select
            className={`form-select custom-select ${
              errors.major ? "is-invalid" : ""
            }`}
            id="major"
            name="major"
            value={this.state.major}
            onChange={this.handleInputChange}
          >
            <option value="">Choose major</option>
            <option value="it">เทคโนโลยีสารสนเทศ</option>
            {/* Add more options as needed */}
          </select>
          <span className="text-danger">{errors.major}</span>
        </div>
        <div className="col-12 p-3">
          <div className="row">
            <div className="container-md text-center">
              <button
                type="button"
                className="btn btn-primary col-4"
                onClick={this.handleRegister}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Register_page;
