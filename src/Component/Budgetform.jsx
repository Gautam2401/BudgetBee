import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function BudgetForm({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    onAdd(name, amount);
    setName("");
    setAmount("");
  };

  return (
    <Card className="mb-4 shadow-sm border-dark">
      <Card.Body>
        <Card.Title as="h2" className="fs-4 mb-3">Create budget</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Budget Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Groceries"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="e.g., ₹350"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="dark" className="w-100">
            Create budget <span role="img" aria-label="money">₹</span>
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default BudgetForm;
