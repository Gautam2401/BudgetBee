import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import BudgetForm from "../Component/Budgetform";
import ExpenseForm from "../Component/ExpenseForm";
import BudgetsList from "../Component/BudgetList";
import Container from "react-bootstrap/Container";
import RecentExpenses from "../Component/RecentExpenses";
import useLocalStorage from "../Component/useLocalStorage";
import Analytics from "../Component/Analytics";
import { useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const handleAddExpense = (name, amount, budgetId) => {
  setExpenses([
    ...expenses,
    {
      id: uuidv4(),
      name,
      amount: parseFloat(amount),
      budgetId,
      date: new Date().toISOString(), 
    },
  ]);
};

const handleDeleteExpense = (expenseId) => {
  setExpenses(expenses.filter((exp) => exp.id !== expenseId));
};

function BudgetPage() {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  useEffect(() => {
    budgets.forEach(budget => {
      const spent = expenses
        .filter(e => e.budgetId === budget.id)
        .reduce((sum, e) => sum + e.amount, 0);
      if (spent > budget.amount) {
        toast.error(`Budget exceeded for ${budget.name}!`);
      } else if (spent > budget.amount * 0.9) {
        toast.warn(`Approaching budget limit for ${budget.name}`);
      }
    });
  }, [budgets, expenses]);

  useEffect(() => {
    expenses.forEach(expense => {
      if (expense.amount > 5000) {
        toast.info(`Large expense recorded: ₹${expense.amount.toFixed(2)} for ${expense.name}`);
      }
    });
  }, [expenses]);

  const handleAddBudget = (name, amount) => {
    setBudgets([
      ...budgets,
      { id: uuidv4(), name, amount: parseFloat(amount) },
    ]);
  };

  const handleAddExpense = (name, amount, budgetId) => {
    setExpenses([
      ...expenses,
      { id: uuidv4(), name, amount: parseFloat(amount), budgetId },
    ]);
  };

  return (
    <Container className="py-5">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="d-flex flex-wrap gap-4 mb-5 mybudgetform">
        <BudgetForm onAdd={handleAddBudget} />
        {budgets.length > 0 && (
          <ExpenseForm budgets={budgets} onAdd={handleAddExpense} />
        )}
      </div>
      <BudgetsList budgets={budgets} expenses={expenses} />
      {budgets.length > 0 && (
        <RecentExpenses
          expenses={expenses}
          budgets={budgets}
          onDelete={handleDeleteExpense}
        />
      )}
      {expenses.length > 0 && <hr/> && <Analytics budgets={budgets} expenses={expenses} />}
    </Container>
  );
}

export default BudgetPage;
