import Card from "../UI/Card.js";

import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from"./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter( expense =>{
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected = {filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpenseList items ={filteredExpenses}/>
			</Card>
		</div>
	);
}

export default Expenses;
