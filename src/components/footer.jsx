import React from "react";
import Linkedin from "../assets/editedli.png";
import Github from "../assets/newgithub.png";
import Twitter from "../assets/twitter-x.png";

function Footer() {
  // Dynamic styles for responsiveness
  const textStyle = {
    fontSize: window.innerWidth < 768 ? "12px" : "18px", 
    
    textAlign: "center",
  };

  const socialTextStyle = {
    fontSize: window.innerWidth < 768 ? "10px" : "16px",
    
    // marginRight: "10px",
  };

  const iconStyle = {
    height: "30px",
    width: "30px",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <>
      <div className="container-fluid violet-gradient mt-5">
        
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 text-center">
            <p style={textStyle}>&copy; 2025 Aaditya Joshi. All Rights Reserved.</p>
          </div>
        </div>

        
        <div className="row justify-content-center mt-1">
          <div className="col-md-4 d-flex justify-content-center gap-3 flex-md-row align-items-center">
            <p style={socialTextStyle}>Connect with me on:</p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" style={iconStyle} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="GitHub" style={iconStyle} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
