import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./HomePage.css";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
  return (
    <div className="home-page-container">
      <header className="home-page-header d-flex justify-content-around">
        <div className="logo">
          <img src="src/assets/VaxNotifybg.png" alt="VaxNotify Logo" />
        </div>
        <nav className="navbar navbar-expand-lg bg-body-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 gap-5 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>{" "}
                  {/* Link to Home */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About VaxNotify
                  </Link>{" "}
                  {/* Add this route later */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/vaccination-calendar">
                    Vaccination Calendar
                  </Link>{" "}
                  {/* Link to Vaccination Calendar */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/faq">
                    FAQ
                  </Link>{" "}
                  {/* Add this route later */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="login-signup gap-4 ">
          <Link to="/login">LOG IN</Link> {/* Link to Login */}
          <Link to="/registration">
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </Link>{" "}
          {/* Link to Registration */}
        </div>
      </header>

      <main className="home-page-main d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center">
            <Col md={6}>
              <h1>
                Vaccine and <br />
                Immunization <br />
                Reminder Software
              </h1>
              <p>
                Our app helps users stay updated on their vaccination <br />
                schedules by sending timely reminders,
                {/*and tracking immunization history*/} ensuring no doses are
                missed.
              </p>
              <Link to="/registration">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    width: "auto",
                    padding: "10px 20px",
                    fontSize: "1.2rem",
                  }}
                >
                  Create Free Account
                </button>
              </Link>{" "}
              {/* Link to Registration */}
            </Col>
            <Col md={6}>
              <img
                src="src/assets/HPimg.jpeg"
                alt="Vaccine"
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </main>

      {/* Alternating Sections for vaccination information */}

      <section className="section1 d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center">
            <Col md={6} className="column-spacing">
              <img
                src="src/assets/img2.jpg"
                alt="Vaccine"
                className="hero-image"
              />
            </Col>
            <Col md={6} className="column-spacing">
              <h1>What is Vaccination?</h1>
              <p>
                Vaccination helps protect individuals by introducing a vaccine
                that trains the immune system to fight specific pathogens, such
                as viruses or bacteria. It has eradicated diseases like smallpox
                and reduced cases of polio, measles, and tetanus, significantly
                improving public health.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section2 d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center">
            <Col md={6} className="column-spacing">
              <h1>How do Vaccines Function?</h1>
              <p>
                Vaccines stimulate the immune system to recognize and fight
                pathogens by introducing a harmless part of the virus or
                bacteria. This helps the body to quickly respond to future
                infections, preventing illness. Some vaccines are taken orally,
                while others are injected.
              </p>
            </Col>
            <Col md={6} className="column-spacing">
              <img
                src="src/assets/img4.jpg"
                alt="Vaccine"
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section3 d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center">
            <Col md={6} className="column-spacing">
              <img
                src="src/assets/img4.avif"
                alt="Vaccine"
                className="hero-image"
              />
            </Col>
            <Col md={6} className="column-spacing">
              <h1>What is the Indian Scenario in Vaccination?</h1>
              <p>
                Despite progress in vaccination efforts, around 30% of children
                in India miss full immunization. The government’s Universal
                Immunization Programme aims to improve coverage, especially in
                rural areas, to protect more people from preventable diseases.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section4 d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center">
            <Col md={6} className="column-spacing">
              <h1>Why Now?</h1>
              <p>
                With over 800 million mobile phones in India, SMS vaccination
                reminders are an effective way to increase vaccine compliance.
                These reminders help parents stay informed about their
                children’s vaccination schedules, improving overall immunization
                rates.
              </p>
            </Col>
            <Col md={6} className="column-spacing">
              <img
                src="src/assets/img4.jpg"
                alt="Vaccine"
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section5 d-flex align-items-center justify-content-center">
        <Container className="container-main">
          <Row className="align-items-center">
            <Col md={6} className="column-spacing">
              <img
                src="src/assets/img5.jpg"
                alt="Vaccine"
                className="hero-image"
              />
            </Col>
            <Col md={6} className="column-spacing">
              <h1>Why was this Service Created?</h1>
              <p>
                This service was created to reduce preventable deaths and
                disabilities by ensuring timely vaccination reminders. By
                sending SMS notifications, we aim to help parents stay on track
                with their children’s vaccinations, preventing missed doses and
                outbreaks.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <sections className="section6 d-flex align-items-center justify-content-center">
        <img src="src/assets/img3.png" alt="" />
      </sections>

      <footer className="home-page-footer">
        <p>&copy; 2024 VaxNotify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
