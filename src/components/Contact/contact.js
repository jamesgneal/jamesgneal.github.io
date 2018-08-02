import React, { Component } from "react";
import { Modal, Row, Col } from "react-materialize";

import {
  FaEnvelope,
  FaMobileAlt,
  FaGithub,
  FaLinkedin,
  FaFile
} from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <Modal header="Connect with me" bottomSheet trigger={<div>Connect</div>}>
        {/* <div className="container"> */}

        <Row className="center connect-methods">
          <Col m={2} offset="m1">
            <a href="mailto:nealjg@gmail.com">
              <FaEnvelope className="connect-icon" />
              <p>nealjg@gmail.com</p>
            </a>
          </Col>

          <Col m={2}>
            <a href="https://github.com/jamesgneal" target="_blank">
              <FaGithub className="connect-icon" />
              <p>GitHub</p>
            </a>
          </Col>
          <Col m={2}>
            <a href="https://www.linkedin.com/in/gneal/" target="_blank">
              <FaLinkedin className="connect-icon" />
              <p>LinkedIn</p>
            </a>
          </Col>
          <Col m={2}>
            <a href="#" target="_blank">
              <FaFile className="connect-icon" />
              <p>Resume</p>
            </a>
          </Col>
          <Col m={2}>
            <a href="tel:804-876-2401">
              <FaMobileAlt className="connect-icon" />
              <p>(804) 876-2401</p>
            </a>
          </Col>
        </Row>
        {/* </div> */}
      </Modal>
    );
  }
}

export default Contact;
