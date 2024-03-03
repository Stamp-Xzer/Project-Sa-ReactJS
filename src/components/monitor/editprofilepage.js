import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        StudentID: "",
        Email: "",
        Password: "",
        f_name: "",
        l_name: "",
      },
      loading: true,
    };
  }

  componentDidMount() {
    const email = localStorage.getItem("email");
    axios
      .get(`http://localhost:3301/student`, {
        params: {
          email: email,
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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      student: {
        ...prevState.student,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { student } = this.state;

    // ตรวจสอบว่าข้อมูลทุกช่องไม่เป็นช่องว่าง
    if (
      student.Email.trim() === "" ||
      student.Password.trim() === "" ||
      student.f_name.trim() === "" ||
      student.l_name.trim() === ""
    ) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    // แสดงหน้าต่างยืนยันการลบรายการ
    const isConfirmed = window.confirm(
      "คุณแน่ใจหรือไม่ที่ต้องการอัปเดตข้อมูลนี้?"
    );
    if (isConfirmed) {
      axios
        .put(
          `http://localhost:3301/update_student/${student.StudentID}`,
          student
        )
        .then((response) => {
          this.props.history.push("/page2");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    }
  };

  render() {
    const { loading, student } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <Header Head="Edit Profile" />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="Email"
                name="Email"
                value={student.Email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password:</label>
              <input
                type="text"
                className="form-control"
                id="Password"
                name="Password"
                value={student.Password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="f_name">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="f_name"
                name="f_name"
                value={student.f_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="l_name">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="l_name"
                name="l_name"
                value={student.l_name}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default EditProfilePage;
