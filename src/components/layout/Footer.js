import React from "react";
import * as $ from "jquery";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>
              copyright &copy;
              <script>document.write(new Date().getFullYear());</script>-
              Developed by
              <b>
                <a href="#" target="_blank">
                  &nbsp;Agile Motion(PTY) LTD
                </a>
              </b>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
