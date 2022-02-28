import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

//1.
const dropdownChangeHandler = (event) => {
 props.onChangeFilter (event.target.value);
 //3.2 Call the onChangeFilter function and forward event.target.value(the selected year) to expenses.js
};

return (
   
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/*1. Listen to changes on the select element by creating a function and pointing here*/}
        <select  value = {props.selected} onChange={dropdownChangeHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
    
  );
};

export default ExpensesFilter;