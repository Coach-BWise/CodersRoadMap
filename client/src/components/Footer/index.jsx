import React, { Component } from "react";
import "./style.css";
class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left">
              <p className="social">
                <a
                  href="https://www.linkedin.com/in/bryan-wise-7a7904a0/"
                  target="blank"
                  data-wow-delay="0.4s"
                  className="external twitter wow fadeInUp"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span className="tooltiptext">Twitter</span>
                </a>
                <a
                  href="https://github.com/Coach-BWise/CodersRoadMap"
                  target="blank"
                  data-wow-delay="0.6s"
                  className="external github wow fadeInUp"
                >
                  <i className="fa fa-github fa-lg" />
                  <span className="tooltiptext">Github</span>
                </a>

                <a
                  href="#"
                  target="blank"
                  data-wow-delay="0.4s"
                  className="external facebook wow fadeInUp"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <span className="tooltiptext">Facebook</span>
                </a>
              </p>
            </div>

            <div className="col-md-6 text-center text-lg-right mt-4 mt-md-3">
              <p>© 2020 Bryan Wise | Trevor Handley | Andrea Labis</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
