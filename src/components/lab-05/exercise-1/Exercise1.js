import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./exercise.scss";

function Exercise1() {
  const progress = [85, 60, 80, 70];
  return (
    <Container>
      <div className="profile-wrapper">
        <div className="avatar">
          <img
            src="https://www.jrsh.co.in/assets/photo/team/team_5670_1644657096.png"
            alt="avatar"
          />
        </div>
        <div className="profile-header">
          <h4 className="heading">PROFILE</h4>
          <p>
            Write a sort brief introduction of just few paragraphs explaining
            exactly who you are, your strength and why you fell you are such a
            suitable candidate.Try to write it in the third person.Here is a
            good example: "A champion of best practice who is organised and also
            has the required level of skills needed to make every customer fell
            special."
          </p>
          <p>
            Currently looking for a suitable position with a reputable company.
          </p>
        </div>
        <div className="professional">
          <Row className="align-items-center h-100">
            <Col sm={5}>
              <p className="text-center text-white bg-dark mb-0 py-2">
                Professional Title
              </p>
            </Col>
            <Col sm={7}>
              <h1 className="">Richard Anderson</h1>
            </Col>
          </Row>
        </div>
        <div className="contact">
          <h4 className="contact-title">CONTACT</h4>
          <ul className="list">
            <li className="list-item">
              <FontAwesomeIcon className="icon" icon={faLocationDot} />
              <span>
                Dayjob.com, 120 Vyse Street
                <p className="mb-0">Birmingham B18</p>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <span>0121 638 0026</span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span>info@dayjob.com</span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <span>Facebook.com/yourname</span>
            </li>
          </ul>
        </div>
        <div className="expertise">
          <h4 className="expertise-title">EXPERTISE</h4>
          <ul className="list">
            {progress.map((item, index) => (
              <li key={index}>
                <span>Text here</span>
                <ProgressBar now={item} className="progress" />
              </li>
            ))}
          </ul>
        </div>
        <div className="education">
          <h4 className="education-title">EDUCATION</h4>
          <ul className="list">
            <li className="list-item">
              <Row>
                <Col xs={6}>University</Col>
                <Col xs={6}>2014 - 2017</Col>
              </Row>
              <Row>
                <Col xs={6}>Course detail</Col>
              </Row>
              <Row>
                <Col xs={6}>Modules</Col>
              </Row>
            </li>
            <li className="list-item">
              <Row>
                <Col xs={6}>College name</Col>
                <Col xs={6}>2012 - 2014</Col>
              </Row>
              <Row>
                <Col xs={6}>Course detail</Col>
              </Row>
              <Row>
                <Col xs={6}>Subject</Col>
              </Row>
            </li>
            <li className="list-item">
              <Row>
                <Col xs={6}>School name</Col>
                <Col xs={6}>2008 - 2012</Col>
              </Row>
              <Row>
                <Col xs={6}>Course detail</Col>
              </Row>
              <Row>
                <Col xs={12}>Enghlish(A) Maths(B) Physics(C)</Col>
              </Row>
            </li>
          </ul>
        </div>
        <div className="experience">
          <h4 className="heading">WORK EXPERIENCE</h4>
          <section>
            <Row>
              <Col xs={3} className="job-title">
                JOB TITLE
              </Col>
              <Col xs={4}>Company Name</Col>
              <Col xs={5}>2019 - present</Col>
            </Row>
            <Row>
              <p>
                In a short statement of no more than a few sentences describe
                your role in the company and outline your key and main
                responsibilities.Try to focus on those duties that are relevant
                to the job you are applying for.
              </p>
            </Row>
            <ul type="square" className="list">
              <li>
                In a sentence describe your most relevant daily work duties.
              </li>
              <li>
                In a sentence describe your most relevant daily work duties.
              </li>
              <li>
                In a sentence describe your most relevant daily work duties.
              </li>
            </ul>
          </section>
          <section>
            <Row>
              <Col xs={3} className="job-title">
                JOB TITLE
              </Col>
              <Col xs={4}>Company Name</Col>
              <Col xs={5}>2019 - present</Col>
            </Row>
            <Row>
              <p>
                In a short statement of no more than a few sentences describe
                your role in the company and outline your key and main
                responsibilities.Try to focus on those duties that are relevant
                to the job you are applying for.
              </p>
            </Row>
            <ul type="square">
              <li>
                In a sentence describe your most relevant daily work duties.
              </li>
              <li>
                In a sentence describe your most relevant daily work duties.
              </li>
            </ul>
          </section>
          <section>
            <Row>
              <Col xs={3} className="job-title">
                JOB TITLE
              </Col>
              <Col xs={4}>Company Name</Col>
              <Col xs={5}>2019 - present</Col>
            </Row>
            <Row>
              <p>
                In a short statement of no more than a few sentences describe
                your role in the company and outline your key and main
                responsibilities.Try to focus on those duties that are relevant
                to the job you are applying for.
              </p>
            </Row>
            <ul type="square">
              <li>
                In a sentence describe your most relevant daily work duties.
              </li>
              <li>
                In a sentence describe your most relevant daily work duties.
              </li>
            </ul>
          </section>
          <section>
            <Row>
              <Col xs={3} className="job-title">
                JOB TITLE
              </Col>
              <Col xs={4}>Company Name</Col>
              <Col xs={5}>2019 - present</Col>
            </Row>
            <Row>
              <p>
                In a short statement of no more than a few sentences describe
                your role in the company and outline your key and main
                responsibilities.
              </p>
            </Row>
          </section>
          <section>
            <Row>
              <Col xs={3} className="job-title">
                JOB TITLE
              </Col>
              <Col xs={4}>Company Name</Col>
              <Col xs={5}>2019 - present</Col>
            </Row>
            <Row>
              <p>
                In a short statement of no more than a few sentences describe
                your role in the company and outline your key and main
                responsibilities.
              </p>
            </Row>
          </section>
          <Row className="align-items-baseline reference">
            <Col xs={4}>
              <h4 className="heading">REFERCENCE</h4>
            </Col>
            <Col xs={8}>
              <p className="mb-0">Available on request.</p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Exercise1;
