import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"

import imageBike from '../../assets/images/icon_bike.png'
//Import Countdown
import Countdown from "react-countdown"

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span>You are good to go!</span>
  } else {
    // Render a countdown
    return (
      <>
        <div className="coming-box">
          {days}
          <span>Days</span>
        </div>
        <div className="coming-box">
          {hours}
          <span>Hours</span>
        </div>
        <div className="coming-box">
          {minutes}
          <span>Minutes</span>
        </div>
        <div className="coming-box">
          {seconds}
          <span>Seconds</span>
        </div>
      </>
    )
  }
}

const Section = () => {
  return (
    <React.Fragment>
      <section className="section hero-section" id="home">
        <div className="bg-overlay bg-primary"/>
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg="5">
              <div data-aos="zoom-in-right" className="text-white-50">
                <h1 className="text-white font-size-24">
                Welcome To
                </h1>
                <span className="text-white font-weight-semibold mb-3 display-5">
                Tetikoes Studio
                </span>
                <p className="font-size-14">
                Pour your ideas into real masterpieces that can be enjoyed by wide society. We, from Tetikoes Studio, will make them come true.
                </p>
                <div className="embed-responsive embed-responsive-16by9 ratio ratio-16x9">
                    <iframe
                      title="test"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/H9aWwf1Q1gA"
                    />
                  </div>
              </div>
            </Col>
            <Col lg="6" md="8" sm="10" className="ms-lg-auto">
              <img
                data-aos="zoom-in"
                className="img-fluid"
                src={imageBike}/>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Section
