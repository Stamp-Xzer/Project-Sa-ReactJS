import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Page_1 from "../../containers/Page_1";

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
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
        // Handle successful login here, e.g. by redirecting to the home page
        console.log("Login successful");
        localStorage.setItem("loggedIn", "true"); // Set loggedIn to true in localStorage
        this.props.history.push("/page1");
      })
      .catch((error) => {
        // Handle error here
        console.error("There was an error!", error);
      });
  };

  render() {
    return (
      <form className="container-sm">
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
              onClick={this.login} // Call the login function on button click
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
