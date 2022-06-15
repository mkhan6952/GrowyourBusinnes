import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <h1 style={{ color: "black", fontSize: "48px" }}>Page Error 404</h1>
      <h2>Sorry,This page doesn't Exist </h2>
      <Link to="/" className="btn btn-primary">
        Go Back To Home Page
      </Link>
    </div>
  );
};

export default Error;
