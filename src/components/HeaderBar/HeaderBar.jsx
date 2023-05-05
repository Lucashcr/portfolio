import PropTypes from "prop-types";

import "./HeaderBar.css";
import logo from "../../assets/logo.png";

export default function HeaderBar({ name }) {
  return (
    <>
      <header>
        <img src={logo} />
        <h2>{name}</h2>
      </header>
    </>
  );
}

HeaderBar.propTypes = {
  name: PropTypes.string,
};
