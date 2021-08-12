import './ExpenseItem.css'
import Expensedate from './ExpeneDate'
import Card from '../Ui/Card'
export default function ExpenseItem(Props){
    const{title,date,amount}=Props
   
   
    return(
        <Card className="expense-item">
        <Expensedate date={Props.date}/>
        
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}
        </div>

 
        </div>
        </Card>
    )
}
