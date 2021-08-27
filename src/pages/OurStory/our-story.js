import React from "react"
import { Container, Row, Col } from "reactstrap"

//Import Components
import FeatureBox from "./feature-box"

//Import images
import feature1 from "../../assets/images/icon_our_story.png"
import feature2 from "../../assets/images/icon_our_story_2.png"
import { Link } from "react-router-dom"

const OurStory = () => {
  const features2 = [
    { id: 1, desc: "Donec pede justo vel aliquet" },
    { id: 2, desc: "Aenean et nisl sagittis" },
  ]

  return (
    <React.Fragment>
      <section className="section" id="features">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">About Us</div>
                <h1 className="font-weight-semibold">Our Story</h1>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center pt-4">
            <Col md="6" sm="8">
              <div data-aos="fade-right">
                <img
                  src={feature1}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
            <Col md="5" className="ms-auto">
              {/* featurebox */}
              <div data-aos="fade-left" className="mt-4 mt-md-auto">
                <div className="d-flex align-items-center mb-2">
                  <div className="font-weight-semibold display-5">
                    Our Story 
                  </div>
                </div>
                <span className="font-size-16">Indah dan bernilai. Komposisi yang sempurna akan keberadaan suatu hal yang disebut <b>karya seni.</b></span>
                <div className="mt-4">
                  <Link to="#" className="btn btn-lg btn-primary me-1 border-radius-20">
                    read more
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center mt-5 pt-md-5">
            <Col md="5">
              {/* featurebox */}
              <div data-aos="fade-right" className="mt-4 mt-md-auto">
                <div className="d-flex align-items-center mb-2">
                </div>
                <span className="font-size-16">Untuk membuatnya ada, <b>kamu sampaikan imajinasi, kami lakukan eksekusi</b>, mari kita berkreasi. </span>
                <div className="mt-4">
                  <Link to="#" className="btn btn-lg btn-primary me-1 border-radius-20">
                    read more
                  </Link>
                </div>
              </div>
            </Col>
            <Col md="6" sm="8" className="ms-md-auto">
              <div data-aos="fade-left" className="mt-4 me-md-0">
                <img
                  src={feature2}
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default OurStory
