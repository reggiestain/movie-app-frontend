import React, { useState, useEffect } from "react";
import * as $ from "jquery";

function Topbar() {
  useEffect(() => {});
  return (
    <nav className="navbar navbar-light bg-white">
      <a href="#" className="navbar-brand">
        Bootsbook
      </a>
      <form className="form-inline">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
}

export default Topbar;
