import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Register_page from "../components/monitor/Register_page";

class Register extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header Head="ระบบคำนวณหน่วยกิตสาขาวิชา IT" />
        <Register_page />
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default Register;
