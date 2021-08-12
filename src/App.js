import Expenses from "./componed/Expenses";


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
  
  return (
    <Expenses item={expenses}/>
    
  );
}

export default App;
