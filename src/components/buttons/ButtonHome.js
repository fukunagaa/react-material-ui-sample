import React from "react";
import { Link } from "react-router-dom";
import ButtonSample1 from "./ButtonSample1"

class ButtonHome extends React.Component {
  render() {
    let displayComponent = null;
    if(this.props.match.params.article == "sample1") {
      displayComponent = <ButtonSample1 />
    }
    return (
      <div>
        <h3>buttons sample</h3>
        <div>
          <ul>
            <li>
              <Link to="/Buttons/sample1">sample1</Link>
            </li>
          </ul>
          <hr />
          {displayComponent}
        </div>
      </div>
    );
  }
}

export default ButtonHome;
