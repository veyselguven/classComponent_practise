import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBar(props) {
  // console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/add">
          <li>AddUser</li>
        </Link>
        <Link to="/github">
          <li>ProjectFiles</li>
        </Link>
      </ul>
    </div>
  );
}
// eger navbar i baska yerde kullacak olursak burda mutlaka navbar la beraber bir tane props ve strin olani
// gondermemiz gerektigini burda solemis oluyoruz.å
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
NavBar.defaultProps = {
  title: "Default App",
};
export default NavBar;
