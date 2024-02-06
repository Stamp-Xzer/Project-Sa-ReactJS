import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Header extends Component {
    render(){
        return <div className="container-fluid p-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 > ระบบคิดคำนวนหน่วยกิต </h1>
                </div>
            </div>
        </div>;
    }
}

export default Header;