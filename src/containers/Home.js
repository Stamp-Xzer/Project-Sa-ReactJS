// import logo from './logo.svg';
// import './Home.css';
import Monitor from "../components/monitor/Monitor";
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header Head="ระบบคำนวณหน่วยกิตสาขาวิชา IT" />
        <Monitor />
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default Home;
