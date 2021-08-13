import React from "react";
import "./ExpensesForm.css";
import {useState} from 'react'
function ExpensesForm(props) {
    const[enterTitle,setTitle]=useState('');
    const[enterAmout,setAmout]=useState('');
    const[enterDate,setDate]=useState('');
    // const[userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmout:'',
    //     enteredDate:''
    //})
 const titleHandler=(event)=>{
     setTitle(event.target.value) 
    //  setUserInput((preventState)=>{
    //      return{...preventState,enteredTitle:event.target.value}
    //     })
    //     console.log(userInput.enterTitle)
        
        
        // setUserInput({
            //     ...userInput,
            //     enteredTitle:event.target.value
            // }
            // )
            // console.log(userInput.enterTitle)
            
        }

const AmoutHandler=(event)=>{
    setAmout(event.target.value)
    // setUserInput({
    //     ...userInput,
    //      enteredAmout:event.target.value}
    //     )
    }
const DateHandler=(event)=>{
    setDate(event.target.value)
    // setUserInput({
    //     ...userInput,

    //     enteredDate:event.target.value
    // })
}
 function onSubmitHeandler(e){
     e.preventDefault();
     const expenseData={
         title:enterTitle,
         amout:enterAmout,
         date:new Date(enterDate)
     }
     props.onSaveExpenseData(expenseData);
     setTitle('');
     setAmout('');
     setDate('');
 }
  return (
    <form onSubmit={onSubmitHeandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input type="number" min="0.01" value={enterAmout} step="0.01" onChange={AmoutHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="01-2-2019" value={enterDate} max="31-12-2022" onChange={DateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
