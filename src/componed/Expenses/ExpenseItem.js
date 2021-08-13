import './ExpenseItem.css'
import Expensedate from './ExpeneDate'
import Card from '../Ui/Card'
import {useState} from 'react'
export default function ExpenseItem(Props){
   //let title=Props.title
   const [title, setstate] = useState(Props.title)
    const ClickHandler =()=>{
        console.log('Clicked !!!')
        setstate('update');
        console.log(title)
    }
   
   
    return(
        <Card className="expense-item">
        <Expensedate date={Props.date}/>
        
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${Props.amount}
        </div>
        <button onClick={ClickHandler}>click</button>

 
        </div>
        </Card>
    )
}
