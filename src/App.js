import Expenses from "./componed/Expenses/Expenses";
import NewExpenses from "./componed/NewExpenses/NewExpenses";


function App() {
  const expenses=[
    {
    id:'e1',
    title:'Toilete Paper ',
    amount:94.12,
    date: new Date()
  },
  {
    id:'e2',
    title:'Car Insurense ',
    amount:95.12,
    date: new Date()
  },
  {
    id:'e1',
    title:'New Desk (wooden) ',
    amount:65.12,
    date: new Date()
  }]
  const addExpenseHandler=expenses=>{
    console.log('In App')
    console.log(expenses)
  }
  
  
  return (
    <div>
    <NewExpenses onAddExpense={addExpenseHandler}/>

    <Expenses item={expenses}/>
    </div>
    
  );
}

export default App;
