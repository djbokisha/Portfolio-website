import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Link } from "@material-ui/core";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Bokisha</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link
            href="https://www.linkedin.com/in/bojan-bojovic/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon />
          </Link>
          <Link href="mailto:bojan.bokisha@gmail.com"
            target="_blank"
            rel="noopener">
          <EmailIcon />
          </Link>
          <Link
            href="https://github.com/djbokisha"
            target="_blank"
            rel="noopener"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, Redux Toolkit, jQuery, HTML, CSS, Sass, NPM, Yarn,
              BootStrap, MaterialUI, TailwindCSS, StyledComponents, Frebase,
              Preact, Figma,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
