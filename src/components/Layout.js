import React from "react";
import { withRouter } from "react-router-dom";

import Nav from "./Nav";

class Layout extends React.Component {
  navigate = () => {
    console.log(this.props);
    // 履歴を残す
    this.props.history.push("/");
    // 履歴を残さない
    // this.props.history.replace("/");
  };
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Layout);
