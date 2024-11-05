import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Correctly import components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa'; // Import icons for headers
import "./AboutVaxNotify.css";

const AboutVaxNotify = () => {
  return (
    <div className="about-vaxnotify">
      <section className="section1 d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src="/img/img3.png"
                alt="Vaccine"
                className="hero-image sec1-img"
              />
            </Col>
            <Col md={6}>
              <h1>
                {/* <FaInfoCircle className="icon-header" />*/} About VaxNotify 
              </h1>
              <p>
                VaxNotify is a comprehensive vaccination scheduling software
                designed to streamline your day-to-day operations. From patient
                self-booking to staff management, VaxNotify empowers medical
                professionals to optimize their practice efficiency and provide
                exceptional patient care.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section2 d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center justify-content-center">
            <Col md={6}>
              <h2>
                {/* <FaCheckCircle className="icon-header" />*/} Key Features 
              </h2>
              <div className="card-container">
                <Row>
                  <Col md={6} className="mb-4">
                    <Card className="feature-card border-blue">
                      <Card.Body>
                        {/* <i className="fa fa-users icon"></i> */}
                        <Card.Title>Vaccine Schedule:</Card.Title>
                        <Card.Text>
                          Shows upcoming vaccines based on age and history, with timely email and SMS reminders.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Card className="feature-card border-blue">
                      <Card.Body>
                        {/* <i className="fa fa-users icon"></i> */}
                        <Card.Title>Reminder Messages</Card.Title>
                        <Card.Text>
                          Users get SMS and email notifications before their vaccination dates to ensure they don’t forget.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Card className="feature-card border-blue">
                      <Card.Body>
                        {/* <i className="fa fa-calendar icon"></i> */}
                        <Card.Title>Follow-Up Notifications</Card.Title>
                        <Card.Text>
                          Sends reminders for follow-up vaccinations and booster shots to keep users on track.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Card className="feature-card border-blue">
                      <Card.Body>
                        {/* <i className="fa fa-clock-o icon"></i> */}
                        <Card.Title>Nearby Vaccination Camps:</Card.Title>
                        <Card.Text>
                          Offers information on nearby vaccination camps and clinics for easy access to vaccination services.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* <Col md={6}>
              <img
                src="https://your-image-url.com" // Replace with your image URL
                alt="VaxNotify features"
                className="hero-image"
              />
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* Additional sections can follow a similar structure */}
    </div>
  );
};

export default AboutVaxNotify;

