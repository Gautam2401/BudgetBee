import React from "react";
import { Card, ProgressBar, Button, Row, Col } from "react-bootstrap";

function BudgetsList({ budgets, expenses }) {
  return (
    <div>
      {budgets.length > 0 &&<h2 className="fw-bold mb-4">Existing Budgets</h2>}
      <Row xs={1} md={2} className="g-4">
        {budgets.map((budget) => {
          const spent = expenses
            .filter((expense) => expense.budgetId === budget.id)
            .reduce((sum, expense) => sum + expense.amount, 0);
          const remaining = budget.amount - spent;
          const percent = Math.min((spent / budget.amount) * 100, 100);

          // Choose color based on budget
          const color = budget.name.toLowerCase().includes("food")
            ? "warning"
            : budget.name.toLowerCase().includes("grocery")
            ? "danger"
            : "primary";

          return (
            <Col key={budget.id}>
              <Card border={color} className="shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title as="h3" className={`fw-bold text-${color} mb-0`}>
                      {budget.name}
                    </Card.Title>
                    <span className={`fs-5 text-${color}`}>
                      ₹{budget.amount.toFixed(2)} Budgeted
                    </span>
                  </div>
                  <ProgressBar
                    now={percent}
                    variant={color}
                    className="mb-2"
                    style={{ height: "8px" }}
                  />
                  <div className="d-flex justify-content-between mb-3">
                    <small className="text-muted">₹{spent.toFixed(2)} spent</small>
                    <small className="text-muted">₹{remaining.toFixed(2)} remaining</small>
                  </div>
                  <Button variant={color} className="w-100">
                    View Details <span role="img" aria-label="wallet">👛</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default BudgetsList;
