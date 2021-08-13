import React from 'react'
import './NewExpenses.css';
import ExpensesForm from './ExpensesForm';
const NewExpenses=(props)=>{
    const saveExpenseDataHandler=(enterExpenseData)=>{
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }
    return(
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )

}
export default NewExpenses