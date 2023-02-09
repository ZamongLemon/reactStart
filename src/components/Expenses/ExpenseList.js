import React from'react';

import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
const ExpenseList = (props) =>{

	if(props.items.length ===0){
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>

	}
	return <ul className="expenses-list">
		{props.items.map((expense) =>(
				<ExpenseItem date={expense.date} 
									 title={expense.title} 
									 amount= {expense.amount}
									 key = {expense.id} />
		))}
	</ul>
};

export default ExpenseList;