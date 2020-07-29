import React from "react";
import { Link } from "react-router-dom";
import className from "classnames";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: true,
    };
  }

  toggleCollapse = () => {
    const collapse = !this.state.collapse;
    this.setState({ collapse });
  };

  render() {
    const location = this.props.location;
    const homeClass = location.pathname === "/" ? "active" : "";
    const buttonsClass = location.pathname.match(/^\/buttons/) ? "active" : "";
    const boxsClass = location.pathname.match(/^\/boxs/) ? "active" : "";
    return (
      <nav>
        <ul>
          <li className={homeClass}>
            <Link to="/" onClick={this.toggleCollapse}>
              Home
            </Link>
          </li>
          <li className={buttonsClass}>
            <Link to="/Buttons/home" onClick={this.toggleCollapse}>
              Buttons
            </Link>
          </li>
          <li className={boxsClass}>
            <Link to="/Boxs" onClick={this.toggleCollapse}>
              Boxs
            </Link>
          </li>
          <li className={"login"}>
            <Link to="/login/main" onClick={this.toggleCollapse}>
              login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
