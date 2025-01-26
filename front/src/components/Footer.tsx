// components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer px-5">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <div className="footer-logo">
              <h3>Coligo</h3>
            </div>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl
              aliquam nisl, nec aliquam nisl nisl sit amet nisl.
            </p>
          </Col>
          <Col md={4} className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            <div className="contact-info">
              <p>Email: info@myawesomeapp.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: 123 Main St, City, Country</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Coligo. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;