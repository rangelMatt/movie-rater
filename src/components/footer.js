import React from "react";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import "./style.module.css";


function Footer() {


  return (
    <footer rel="stylesheet" href="style.module.css">
      <div className="container">
        <div className="row">
          <div className="col social-links">
            <a
              href="https://github.com/rangelMatt">
              <GoMarkGithub
                size={50}
                color="white"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-rangel">
              <FaLinkedin
                size={50}
                color="white"
              />
              </a>
              <a
              href="mailto:mattrangel@gmail.com">
              <GoMail
                size={50}
                color="white"
              />
              </a>
          </div>
          <div className="col social-links">
            
            
          </div>
          <div className="col">
            <div
              onClick={() =>
                this.props.applyPickedLanguage(
                  window.$primaryLanguage,

                )
              }
              style={{ display: "inline" }}
            >
              <span
                className="iconify language-icon mr-5"
                data-icon=""
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
            </div>
            <div
              onClick={() =>
                this.props.applyPickedLanguage(
                  window.$primaryLanguageIconId
                )
              }
              style={{ display: "inline" }}
            >
            </div>
          </div>
          <div className="col">
            <div className="copyright py-4 text-center">
              <div className="container">
                <small>
                  Copyright &copy;{"Matt Rangel"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
