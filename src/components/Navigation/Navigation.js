import React from "react";
import "./Navigation.css";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

const Navigation = ({ label, to }) => {
  let match = useRouteMatch({
    path: to,
  });

  if (match) {
    match = match.isExact;
  }
  return (
    <Link to={to} className={match ? "active" : ""}>
      {label}
    </Link>
  );
};

export default Navigation;
