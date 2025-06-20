import React from "react";
import { Table, Badge } from "react-bootstrap";

function RecentExpenses({ expenses, budgets }) {

  const getBudgetName = (id) => {
    const budget = budgets.find((b) => b.id === id);
    return budget ? budget.name : "Unknown";
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  return (
    <div className="mt-5">
      <h2 className="fw-bold mb-4">Recent Expenses</h2>
      <Table hover responsive className="align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center text-muted">
                No expenses recorded yet.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>₹{expense.amount.toFixed(2)}</td>
                <td>{formatDate(expense.date || expense.createdAt || new Date())}</td>
                <td>
                  <Badge bg="danger" className="fs-6 px-3">
                    {getBudgetName(expense.budgetId)}
                  </Badge>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default RecentExpenses;
