import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "@material-ui/core";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link
          href="https://www.instagram.com/djbokisha1/"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://twitter.com/DjBokisha"
          target="_blank"
          rel="noopener"
        >
        <TwitterIcon />
        </Link>
        <Link
          href="https://www.facebook.com/djbokisha/"
          target="_blank"
          rel="noopener"
        >
        <FacebookIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bojan-bojovic/"
          target="_blank"
          rel="noopener"
        >
        <LinkedInIcon />
        </Link>
        
        

       
        
      </div>
      <p> &copy; 2022 bokisha.com</p>
    </div>
  );
}

export default Footer;
