import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../Ui/Card";
export default function Expenses(props){
    
    return(
        <Card className="expenses">
            
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}/>
        </Card>
    )
}