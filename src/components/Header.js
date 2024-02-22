import React, { Component } from "react";
const Header = (prop) => {
  const { Head } = prop;
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1> {Head} </h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
