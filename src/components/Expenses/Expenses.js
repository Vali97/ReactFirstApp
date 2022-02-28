import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
  //4. Update the state
  const [filteredYear, setFilteredYear] = useState("2020");

  //3. Define a function which I want to pass down
  const filterChangeHandler = (selectedYear) => {
    //4.1
    setFilteredYear(selectedYear);
  };

  //By adding this function and returning true, we classify expenses based on the year they have been made.
  const filteredExpenses = props.items.filter(expense => { 
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div /* 2. Ad the expensesFilter cmp inside of the card and import it */>
      <Card className="expenses">
        <ExpensesFilter // 3.1 point at the filterChangeHandler function
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>

        {/*Conditional Content
        {filteredExpenses.length === 0 && <p>{expensesContent}</p> }
        {filteredExpenses.length > 0 && 
        /*Transformation of an array to an array full of JSX items*/ } 
       
      </Card>
    </div>
  );
};
export default Expenses;
