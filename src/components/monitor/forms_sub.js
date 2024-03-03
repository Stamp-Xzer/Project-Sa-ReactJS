import React, { Component } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

class Add_Sub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      C_ID: "",
      C_Sem: "",
      C_D: "",
      errors: {},
      forms: [this.createForm()],
    };
  }

  createForm() {
    return {
      C_ID: "",
      C_Sem: "",
      C_D: "",
    };
  }

  handleInputChange = (index) => (e) => {
    const { name, value } = e.target;
    const { forms } = this.state;
    const newForms = [...forms];
    newForms[index] = {
      ...newForms[index],
      [name]: value,
    };
    this.setState({ forms: newForms });
  };

  handleAddSubmit = () => {
    const { forms } = this.state;
    const studentID = localStorage.getItem("student_id"); // Assuming you retrieve student_id from localStorage

    forms.forEach((form) => {
      const { C_ID, C_Sem, C_D } = form;

      if (isNaN(C_ID) || isNaN(C_Sem)) {
        alert("กรุณาใส่ตัวเลขเท่านั้นใน รหัสวิชา และ ปีการศึกษา");
        return;
      }
      if (!C_ID || !C_Sem || !C_D) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }

      axios
        .post("http://localhost:3301/add_sub", {
          stu_id: studentID,
          c_id: C_ID,
          seme: `${C_Sem}/${C_D}`,
        })
        .then((response) => {
          if (response.data == "Values Inserted") {
            this.props.history.push("/page1");
          } else {
            alert("ไม่มีรหัสรายวิชานี้ กรุณาแจ้งเจ้าของระบบ");
            this.props.history.push("/page1");
          }
        })
        .catch((error) => {
          console.error("Error adding subject:", error);
        });
    });
  };

  handleAddForm = () => {
    this.setState((prevState) => ({
      forms: [...prevState.forms, this.createForm()],
    }));
  };

  render() {
    const { errors, forms } = this.state;

    return (
      <div className="container-xl">
        <Header Head="เพิ่มรายวิชาที่ลงทะเบียน" />
        {forms.map((form, index) => (
          <form className="row g-3" key={index}>
            <div className="col-md-4">
              <label className="form-label">รหัสวิชา</label>
              <input
                type="text"
                className={`form-control ${errors.C_ID ? "is-invalid" : ""}`}
                name="C_ID"
                value={form.C_ID}
                onChange={this.handleInputChange(index)}
              />
              <span className="text-danger">{errors.C_ID}</span>
            </div>
            <div className="col-md-4">
              <label className="form-label">ปีการศึกษา</label>
              <input
                type="text"
                className={`form-control ${errors.C_Sem ? "is-invalid" : ""}`}
                name="C_Sem"
                value={form.C_Sem}
                onChange={this.handleInputChange(index)}
              />
              <span className="text-danger">{errors.C_Sem}</span>
            </div>
            <div className="col-md-4">
              <label className="form-label">ภาคการศึกษา</label>
              <select
                className={`form-select custom-select ${
                  errors.C_D ? "is-invalid" : ""
                }`}
                name="C_D"
                value={form.C_D}
                onChange={this.handleInputChange(index)}
              >
                <option value="">เลือกภาคการศึกษา</option>
                <option value="ภาคต้น">ภาคต้น</option>
                <option value="ภาคปลาย">ภาคปลาย</option>
                <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
              </select>
              <span className="text-danger">{errors.C_D}</span>
            </div>
          </form>
        ))}
        <div className="col-12 p-3">
          <div className="row g-2">
            <div className="container-md text-center col">
              <button
                type="button"
                className="btn btn-primary col-4"
                onClick={this.handleAddSubmit}
              >
                เพิ่มวิชาที่ลงทะเบียน
              </button>
            </div>
            <div className="container-md text-center col-2">
              <button
                type="button"
                className="btn btn-warning col-4"
                onClick={this.handleAddForm}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <Footer company="Kasetsart University" email="Mathit.j@ku.th" />
      </div>
    );
  }
}

export default withRouter(Add_Sub);
