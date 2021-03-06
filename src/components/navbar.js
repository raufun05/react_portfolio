import React from "react";
import { NavLink } from "react-router-dom";
import Resume from "../images/Raufun_Resume.pdf";
import ResumeIcon from "../images/resume-color-80.png";
import GithubIcon from "../images/GitHub-icon.png";
import LinkedinIcon from "../images/LI-In-Bug.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-8">
        <li className="flex-sm-fill text-sm-center">
          <NavLink
          exact
            to="/"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            About
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/portfolio"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Contact
          </NavLink>
        </li>
        <a
          className="flex-sm-fill text-sm-center nav-link resume"
          href={Resume}
        //   onClick={() => window.open("../assets/images/jane-doe-resume.pdf")}
        //   href={Resume}
        // onClick={() => window.open(Resume)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ResumeIcon}
            alt="resume"
            height="28"
            width="28"
            className="resume"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://github.com/raufun05/"
        // onClick={() => window.open("https://github.com/jenjch/")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GithubIcon}
            alt="GitHub"
            height="25"
            width="25"
            className="github"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://www.linkedin.com/in/raufun-patoary-167a05198/"
        // onClick={() => window.open("https://www.linkedin.com/")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedinIcon}
            alt="Linkedin"
            height="24"
            width="29"
            className="linkedin"
          />
        </a>
    </nav>
  );
}

export default Navbar;
