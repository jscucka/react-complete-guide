import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (year) => {
        console.log(year);
        setFilteredYear(year);
    }
    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    }
    )
    return (
        <li>

            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>



            </Card>
        </li>
    );
}
export default Expenses;