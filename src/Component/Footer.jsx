import { Container, Row, Col} from "react-bootstrap";
import logo from "../assets/generated-image.png"
function Footer() {
  return (
    <footer style={{
      background: "#4f8a7d",
      color: "#fff",
      padding: "32px 0 16px 0",
      marginTop: "5px"
    }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center mb-2 mb-md-0">
            <img src={logo} alt="Budget Bee Logo" style={{ width: 32, height: 32, marginRight: 10, verticalAlign: "middle" }} />
            <span style={{ fontWeight: 600, fontSize: 22, verticalAlign: "middle" }}>Budget Bee</span>
          </Col>
          <Col md={6} className="text-md-end text-center">
            <a href="/privacy" style={{ color: "#fff", marginRight: 20, textDecoration: "underline", fontSize: 15 }}>Privacy Policy</a>
            <a href="/terms" style={{ color: "#fff", marginRight: 20, textDecoration: "underline", fontSize: 15 }}>Terms</a>
            <span style={{ fontSize: 15, opacity: 0.8 }}>© {new Date().getFullYear()} Budget Bee. All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
