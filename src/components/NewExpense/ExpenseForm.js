import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const [title, setEnteredTitle] = useState();
    const [amount, setEnteredAmount] = useState();
    const [date, setEnteredDate] = useState();

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); 
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-02-09" max="2022-02-09" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;