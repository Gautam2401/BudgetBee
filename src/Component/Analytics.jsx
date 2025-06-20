import { Chart } from "react-google-charts";

function Analytics({ budgets, expenses }) {
  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const totalBudgeted = budgets.reduce((sum, b) => sum + b.amount, 0);
  const remaining = totalBudgeted - totalSpent;

  const pieData = [["Category", "Amount"]];
  const categories = {};
  expenses.forEach((e) => {
    const budget = budgets.find((b) => b.id === e.budgetId);
    const name = budget ? budget.name : "Other";
    categories[name] = (categories[name] || 0) + e.amount;
  });
  Object.entries(categories).forEach(([name, amount]) => {
    pieData.push([name, amount]);
  });

  const monthly = {};
  expenses.forEach((e) => {
    const date = new Date(e.date || e.createdAt || new Date());
    const month = date.toLocaleString('default', { month: 'short', year: 'numeric' });
    monthly[month] = (monthly[month] || 0) + e.amount;
  });
  const barData = [["Month", "Amount Spent"]];
  Object.entries(monthly).forEach(([month, amount]) => {
    barData.push([month, amount]);
  });
  const lineData = barData;


  const comboData = [["Budget", "Budgeted", "Spent"]];
  budgets.forEach((b) => {
    const spent = expenses
      .filter((e) => e.budgetId === b.id)
      .reduce((sum, e) => sum + e.amount, 0);
    comboData.push([b.name, b.amount, spent]);
  });

  return (
    <div className="mt-5">
    <hr></hr>
      <h2 className="fw-bold mb-4" style={{textAlign:"center"}}>Data Analytics</h2>
      <div className="mb-4">
        <h4>Summary</h4>
        <p>Total Budgeted: ₹{totalBudgeted.toFixed(2)}</p>
        <p>Total Spent: ₹{totalSpent.toFixed(2)}</p>
        <p>Remaining: ₹{remaining.toFixed(2)}</p>
      </div>
      <div className="chart-container mb-4">
        <h4>Spending by Category</h4>
        <Chart
          chartType="PieChart"
          data={pieData}
          width="100%"
          height="400px"
          options={{ is3D: true }}
        />
      </div>
      <div className="chart-container mb-4">
        <h4>Monthly Spending</h4>
        <Chart
          chartType="ColumnChart"
          data={barData}
          width="100%"
          height="400px"
          options={{
            title: "Monthly Spending",
            legend: { position: "none" },
          }}
        />
      </div>
      <div className="chart-container mb-4">
        <h4>Trend Over Time</h4>
        <Chart
          chartType="LineChart"
          data={lineData}
          width="100%"
          height="400px"
          options={{
            title: "Trend Over Time",
            legend: { position: "none" },
          }}
        />
      </div>
      <div className="chart-container">
        <h4>Budget vs. Actual</h4>
        <Chart
          chartType="ComboChart"
          data={comboData}
          width="100%"
          height="400px"
          options={{
            title: "Budget vs. Actual",
            seriesType: "bars",
            series: { 1: { type: "line" } },
            legend: { position: "bottom" },
          }}
        />
      </div>
    </div>
  );
}

export default Analytics;
