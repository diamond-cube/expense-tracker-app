import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "PlayStation 5",
    amount: 399,
    date: new Date(2022, 4, 1),
  },
  {
    id: "e2",
    title: "PlayStation 4",
    amount: 299,
    date: new Date(2020, 3, 20),
  },
  {
    id: "e3",
    title: "Xbox Series S",
    amount: 349,
    date: new Date(2021, 6, 30),
  },
  {
    id: "e4",
    title: "Xbox Series X",
    amount: 499,
    date: new Date(2021, 10, 31),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
