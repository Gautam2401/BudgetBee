import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import logo from "../assets/generated-image.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #eaf6f3 0%, #f6fafd 100%)",
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          background: "#4f8a7d",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="Budget Bee"
          style={{ width: 40, height: 40, marginRight: 12 }}
        />
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 28 }}>
          Budget Bee
        </span>
      </div>

      {/* Main Content */}
      <Container className="text-center py-5" style={{ flex: 1 }}>
        <h1 style={{ fontWeight: 700, fontSize: 48 }}>
          Take Control of Your{" "}
          <span style={{ color: "#4f8a7d" }}>Finances</span>
        </h1>
        <p
          style={{
            color: "#6c757d",
            fontSize: 18,
            marginBottom: 32,
          }}
        >
          Smart budgeting made simple. Track expenses, set goals, and achieve
          financial freedom with Budget Bee.
        </p>
        <Button
          onClick={() => navigate("/budgetpage")}
          variant="success"
          size="lg"
          style={{
            marginBottom: 10,
            borderRadius: 30,
            padding: "12px 32px",
            fontSize: 20,
            boxShadow: "0 2px 8px #b5d1c9",
          }}
        >
          Get Started &rarr;
        </Button>

        {/* Features Section */}
        <Row className="mt-5 justify-content-center">
          <Col md={4} className="mb-4">
            <Card
              style={{
                border: "none",
                borderRadius: 16,
                boxShadow: "0 2px 12px #e3e9ed",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    background: "#e7f4ef",
                    borderRadius: "50%",
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <span style={{ fontSize: 28, color: "#4f8a7d" }}>↗️</span>
                </div>
                <Card.Title>Track Expenses</Card.Title>
                <Card.Text>
                  Monitor your spending patterns and identify areas where you can
                  save money effortlessly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              style={{
                border: "none",
                borderRadius: 16,
                boxShadow: "0 2px 12px #e3e9ed",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    background: "#eaf2fb",
                    borderRadius: "50%",
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <span style={{ fontSize: 28, color: "#4f8a7d" }}>$</span>
                </div>
                <Card.Title>Smart Budgeting</Card.Title>
                <Card.Text>
                  Create personalized budgets that adapt to your lifestyle and
                  help you reach your financial goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card
              style={{
                border: "none",
                borderRadius: 16,
                boxShadow: "0 2px 12px #e3e9ed",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    background: "#fffbe6",
                    borderRadius: "50%",
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <span style={{ fontSize: 28, color: "#e6b800" }}>🎯</span>
                </div>
                <Card.Title>Achieve Goals</Card.Title>
                <Card.Text>
                  Set financial targets and get insights on how to reach them
                  faster with our intelligent recommendations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer
        style={{
          background: "#4f8a7d",
          color: "#fff",
          padding: "32px 0 16px 0",
          marginTop: "auto",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col
              md={6}
              className="text-md-start text-center mb-2 mb-md-0"
            >
              <img
                src={logo}
                alt="Budget Bee Logo"
                style={{
                  width: 32,
                  height: 32,
                  marginRight: 10,
                  verticalAlign: "middle",
                }}
              />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 22,
                  verticalAlign: "middle",
                }}
              >
                Budget Bee
              </span>
            </Col>
            <Col md={6} className="text-md-end text-center">
              <a
                href="/privacy"
                style={{
                  color: "#fff",
                  marginRight: 20,
                  textDecoration: "underline",
                  fontSize: 15,
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                style={{
                  color: "#fff",
                  marginRight: 20,
                  textDecoration: "underline",
                  fontSize: 15,
                }}
              >
                Terms
              </a>
              <span style={{ fontSize: 15, opacity: 0.8 }}>
                © {new Date().getFullYear()} Budget Bee. All rights reserved.
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
