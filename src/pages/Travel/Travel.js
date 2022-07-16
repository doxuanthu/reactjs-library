import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faComments,
  faPlaneUp,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import "./Travel.scss";
import { Link } from "react-router-dom";

function Travel() {
  return (
    <Container fluid className="landing-page-wrapper p-0 ">
      <div className="landing-page">
        <header className="header fixed-top">
          <Row className="h-100 align-items-center">
            <Col xs={{ span: 2, offset: 2 }} className="travel-agency">
              <span>Travel</span> <span>Agency</span>
            </Col>
            <Col
              xs={{ span: 2, offset: 2 }}
              className="d-flex align-items-center h-100"
            >
              <span className="connect-social">Connect with us: </span>
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
            </Col>
            <Col xs={{ span: 2, offset: 0 }} className="contact-block">
              <FontAwesomeIcon className="phone-icon" icon={faPhoneVolume} />
              <div className="contact-block--content">
                <p>Call us for More Information</p>
                <p>(847) 613-8094</p>
              </div>
            </Col>
          </Row>
        </header>
        <section className="banner">
          <img
            src="https://png.pngtree.com/background/20210711/original/pngtree-travel-season-global-travel-banner-picture-image_1118691.jpg"
            alt="travel banner"
            className="image"
          />
          <div className="banner-content">
            <h3 className="display-3 text-white">
              See what the BUZZ is all about!
            </h3>
            <h1>International Travel Agency</h1>
            <button className="get-offer">GET THE BEST OFFER</button>
          </div>
        </section>
        <section className="options">
          <div className="list-opt">
            <Link to="consulting" className="consulting-btn">
              <FontAwesomeIcon className="icon" icon={faComments} /> CONSULTING
            </Link>
            <Link to="guide" className="travel-guide-btn">
              <FontAwesomeIcon className="icon" icon={faPlaneUp} /> TRAVEL GUIDE
            </Link>
            <Link to="hotel-info" className="hotel-info-btn">
              <FontAwesomeIcon className="icon" icon={faHotel} /> HOTEL INFO
            </Link>
          </div>
        </section>
        <section className="main-title">
          <h2>What We Offer</h2>
          <p>
            LOREM IS IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY
          </p>
        </section>
        <section className="offers">
          <Card className="offer">
            <Card.Img
              variant="top"
              src="https://media.travel.com.vn/Advertisings/bn_211228_danang.jpg"
              className="offer-image"
            />
            <Card.Body className="p-0">
              <Card.Title className="card-title mt-4 mb-3">
                LOREM IPSUM DOLOR
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="offer">
            <Card.Img
              variant="top"
              src="https://media.travel.com.vn/Advertisings/bn_211228_danang.jpg"
              className="offer-image"
            />
            <Card.Body className="p-0">
              <Card.Title className="card-title mt-4 mb-3">
                LOREM IPSUM DOLOR
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="offer">
            <Card.Img
              variant="top"
              src="https://media.travel.com.vn/Advertisings/bn_211228_danang.jpg"
              className="offer-image"
            />
            <Card.Body className="p-0">
              <Card.Title className="card-title mt-4 mb-3">
                LOREM IPSUM DOLOR
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
        <footer className="footer">
          <small>&#169; Copyright 2016-2017.All Rights Reserved</small>
          <small>Designed by: buylandingpagedesign.com</small>
        </footer>
      </div>
    </Container>
  );
}

export default Travel;
