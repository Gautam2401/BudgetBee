import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

function ExpenseForm({ budgets, onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [budgetId, setBudgetId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !budgetId) return;
    onAdd(name, amount, budgetId);
    setName("");
    setAmount("");
    setBudgetId("");
  };

  return (
    <Card className="mb-4 shadow-sm border-dark">
      <Card.Body>
        <Card.Title as="h2" className="fs-4 mb-3">Add New Expense</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Expense Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., Coffee"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="e.g., 3.50"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Budget Category</Form.Label>
            <Form.Select
              value={budgetId}
              onChange={(e) => setBudgetId(e.target.value)}
              required
            >
              <option value="">Select Budget</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button type="submit" variant="dark" className="w-100">
            Add Expense <span role="img" aria-label="plus">+</span>
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ExpenseForm;
