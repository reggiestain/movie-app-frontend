import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="main">
      <h1>Page Not found</h1>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
