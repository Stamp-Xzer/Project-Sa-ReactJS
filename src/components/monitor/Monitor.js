import React, { Component } from "react";
import { Link } from "react-router-dom";

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    return (
      <form className="container-sm ">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            <button type="button" className="btn btn-primary col-4">
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

export default Monitor;
