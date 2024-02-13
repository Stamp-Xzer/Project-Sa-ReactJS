import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return withRouter(
    class extends Component {
      componentDidMount() {
        if (!this.checkAuth()) {
          this.props.history.push("/");
        }
      }

      componentDidUpdate() {
        if (!this.checkAuth()) {
          this.props.history.push("/");
        }
      }

      checkAuth() {
        // Implement your auth check logic here
        return localStorage.getItem("loggedIn") === "true";
      }

      render() {
        if (this.checkAuth()) {
          return <ComponentToProtect {...this.props} />;
        }
        return null;
      }
    }
  );
}
