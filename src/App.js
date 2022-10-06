import React, { useEffect, useState } from "react";
import Form from "./components/form";
import Header from "./components/header";
import Resume from "./components/resume"
import Global from "./styles/global"

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransacionsList] = useState(
     data ? JSON.parse(data) : {}
  );
  const [income,setIncome] = useState(0);
  const [expense,setExpense] = useState(0);
  const [total,setTotal] = useState(0);

  useEffect(() => {
      const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

      const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

      const expense = amountExpense.reduce((acc,cur) => acc + cur,0).toFixed(2);
      const income = amountIncome.reduce((acc,cur) => acc + cur,0).toFixed(2);

      const total = Math.abs(income - expense).toFixed(2);

      setIncome(`R$ ${income}`);
      setExpense(`R$ ${income}`);
      setTotal(`${Number(income) < Number(expense) ? "-": ""}R$ ${total}`);
  
    }, [transactionsList]);

    const handleAdd = (transaction) =>{
      const newArrayTransactions = [...transactionsList, transaction];

      setTransacionsList(newArrayTransactions);

      localStorage.setItem("transaction", JSON.stringify(newArrayTransactions));
    };
return (
  <>
 <Header/>
 <Resume income={income} expense={expense} total={total}/>
 <Form handleAdd={handleAdd}/> {/*passando a propiedade handleAdd  */} 
  <Global />
  </>
);
};
export default App;
