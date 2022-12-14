import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DevQuiz
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link active">
                Home
              </Link>

              <Link to="/statistics" className="nav-link active">
                Statistics
              </Link>
              <Link to="/blog" className="nav-link active">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
