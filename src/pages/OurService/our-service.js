import React, { useState } from "react"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

//Images
import client1 from "../../assets/images/clients/1.png"
import client2 from "../../assets/images/clients/2.png"
import client3 from "../../assets/images/clients/3.png"
import client4 from "../../assets/images/clients/4.png"
import client5 from "../../assets/images/clients/5.png"
import client6 from "../../assets/images/clients/6.png"
import iconPpt from '../../assets/images/icon_ppt.png'
import iconFeed from '../../assets/images/icon_feed.png'
import iconLogo from '../../assets/images/icon_logo.png'
import iconMotion from '../../assets/images/icon_motion.png'
import iconVideoEditing from '../../assets/images/icon_video_editing.png'

const OurService = () => {
  const [step1, setStep1] = useState(true)
  const [step2, setStep2] = useState(false)

  return (
    <React.Fragment>
      <section className="section pt-4 bg-white" id="about">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">What do We Offer?</div>
                <h1 className="font-weight-semibold">Our Service</h1>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col data-aos="fade-right" lg="3">
              <div className="text-muted">
                <h3 className="font-weight-semibold">Graphic Design</h3>
                <p>
                Cari yang inovatif untuk tunjang performamu? Tetikoes Studio janjikan desain yang nggak bikin jemu.
                </p>
                <div className="button-items">
                  <Link to="#" className="btn btn-primary me-1">
                    Read More
                  </Link>
                  {/* <Link to="#" className="btn btn-outline-primary">
                    How It work
                  </Link> */}
                </div>

              </div>
            </Col>

            <Col lg="8" className="ms-auto">
              <div className="mt-4 mt-lg-0">
                <Row>
                  <Col sm="4">
                    <Card data-aos="flip-left" className="border border-radius-20">
                      <CardBody>
                        <div className="mb-3">
                          <img
                            className="img-fluid"
                            width={40}
                            height={40}
                            src={iconPpt}/>
                        </div>
                        <h5>PPT</h5>
                        <p className="text-muted mb-0">
                        Beragam desain kreatif yang dijamin selaras dengan keperluan presentasimu.
                        </p>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top text-center">
                        <Link to="#" className="text-primary">
                          Learn more
                        </Link>
                      </div>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card data-aos="flip-left" className="border mt-lg-4 border-radius-20">
                      <CardBody>
                        <div className="mb-3">
                          <img
                            className="img-fluid"
                            width={40}
                            height={40}
                            src={iconFeed}/>
                        </div>
                        <h5>Feed IG</h5>
                        <p className="text-muted mb-0">
                        Kreasi tanpa batas untuk visual feed Instagram yang paling cocok dengan style-mu.                        </p>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top text-center">
                        <Link to="#" className="text-primary">
                          Learn more
                        </Link>
                      </div>
                    </Card>
                  </Col>
                  <Col sm="4">
                    <Card data-aos="flip-left" className="border mt-lg-5 border-radius-20">
                      <CardBody>
                        <div className="mb-3">
                          <img
                            className="img-fluid"
                            width={40}
                            height={40}
                            src={iconLogo}/>
                        </div>
                        <h5>Logo</h5>
                        <p className="text-muted mb-0">
                        Desain artistik yang modis dan adiktif agar logomu lebih stand out .                        </p>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top text-center">
                        <Link to="#" className="text-primary">
                          Learn more
                        </Link>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* motion graphic */}

          <Row className="mt-5 align-items-center">
            <Col data-aos="fade-right" lg="5">
              <div className="text-muted">
                <h3 className="font-weight-semibold">Motion Graphics</h3>
                <p>
                Tak hanya sekadar “bergerak/menggerakkan”,  Tetikoes Studio cantumkan makna “undang ketertarikan”.
                </p>

                <div className="button-items">
                  <Link to="#" className="btn btn-primary me-1">
                    Read More
                  </Link>
                </div>

              </div>
            </Col>

            <Col lg="6" className="ms-auto">
              <div className="mt-4 mt-lg-0">
                <Row>
                  <Col sm="6">
                    <Card data-aos="flip-left" className="border border-radius-20">
                      <CardBody>
                        <div className="mb-3">
                          <img
                            className="img-fluid"
                            width={40}
                            height={40}
                            src={iconMotion}/>
                        </div>
                        <h5>Motion Graphics</h5>
                        <p className="text-muted mb-0">
                        Narasikan ceritamu, ungkapkan dengan visualisasi gerak ditambah ekstra suara melalui motion grafis. 
                        </p>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top text-center">
                        <Link to="#" className="text-primary">
                          Learn more
                        </Link>
                      </div>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card data-aos="flip-left" className="border mt-lg-5 border-radius-20">
                      <CardBody>
                        <div className="mb-3">
                          <img
                            className="img-fluid"
                            width={40}
                            height={40}
                            src={iconVideoEditing}/>
                        </div>
                        <h5>Video Editing</h5>
                        <p className="text-muted mb-0">
                        Jadikan videomu jauh lebih memikat dengan komposisi editing yang tepat.                        </p>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top text-center">
                        <Link to="#" className="text-primary">
                          Learn more
                        </Link>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>


          {/* web design */}

          <Row className="mt-5 align-items-center">
            <Col data-aos="fade-right" lg="5">
              <div className="text-muted">
                <h3 className="font-weight-semibold">Web Design</h3>
                <p>
                Tak ada istilah “ketertinggalan karena gaptek”. Tetikoes Studio bantu ciptakan relasi mengglobal dengan desain yang nggak pernah jelek.                </p>

                <div className="button-items">
                  <Link to="#" className="btn btn-primary me-1">
                    Read More
                  </Link>
                </div>

              </div>
            </Col>

            <Col lg="6" className="ms-auto">
              <div className="mt-4 mt-lg-0">
                <Row>
                  <Col sm="6">
                    <Card data-aos="flip-left" className="border border-radius-20">
                      <CardBody>
                        <div className="mb-3">
                          <img
                            className="img-fluid"
                            width={40}
                            height={40}
                            src={iconMotion}/>
                        </div>
                        <h5>Company Profile</h5>
                        <p className="text-muted mb-0">
                        Desain web yang menarik sesuai citra usahamu dengan web yang mudah diakses.                        </p>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top text-center">
                        <Link to="#" className="text-primary">
                          Learn more
                        </Link>
                      </div>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card data-aos="flip-left" className="border mt-lg-5 border-radius-20">
                      <CardBody>
                        <div className="mb-3">
                          <img
                            className="img-fluid"
                            width={40}
                            height={40}
                            src={iconVideoEditing}/>
                        </div>
                        <h5>Wedding</h5>
                        <p className="text-muted mb-0">
                        Perpaduan keindahan dan keefisienan undangan pernikahan yang dapat diakses melalui web.                         </p>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top text-center">
                        <Link to="#" className="text-primary">
                          Learn more
                        </Link>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <hr className="my-5" />

          <Row>
            <Col lg="12">
              <Col lg="12">
                <div className="hori-timeline">
                  <div
                    className="owl-carousel owl-theme  navs-carousel events"
                    id="timeline-carousel"
                  >
                    {step1 ? (
                      <>
                        <Row>
                          <Col md={3}>
                            <div className="item">
                              <div className="client-images">
                                <img
                                  src={client1}
                                  alt="client-img"
                                  className="mx-auto img-fluid d-block"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="item">
                              <div className="client-images">
                                <img
                                  src={client2}
                                  alt="client-img"
                                  className="mx-auto img-fluid d-block"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="item">
                              <div className="client-images">
                                <img
                                  src={client3}
                                  alt="client-img"
                                  className="mx-auto img-fluid d-block"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="item">
                              <div className="client-images">
                                <img
                                  src={client4}
                                  alt="client-img"
                                  className="mx-auto img-fluid d-block"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </>
                    ) : null}

                    {step2 ? (
                      <>
                        <Row>
                          <Col md={3}>
                            <div className="item">
                              <div className="client-images">
                                <img
                                  src={client4}
                                  alt="client-img"
                                  className="mx-auto img-fluid d-block"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="item">
                              <div className="client-images">
                                <img
                                  src={client5}
                                  alt="client-img"
                                  className="mx-auto img-fluid d-block"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={3}>
                            <div className="item">
                              <div className="client-images">
                                <img
                                  src={client6}
                                  alt="client-img"
                                  className="mx-auto img-fluid d-block"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </>
                    ) : null}

                    <div className="owl-nav" style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        onClick={() => {
                          setStep1(true)
                          setStep2(false)
                        }}
                        className="border-0"
                        disabled={step1}
                      >
                        <i className="mdi mdi-chevron-left"/>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setStep1(false)
                          setStep2(true)
                        }}
                        className="border-0"
                        disabled={step2}
                      >
                        <i className="mdi mdi-chevron-right"/>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default OurService
