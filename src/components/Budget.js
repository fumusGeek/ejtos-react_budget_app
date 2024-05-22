import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newBudget = Number(event.target.value);
        dispatch({ type: 'SET_BUDGET', payload: newBudget })
        if (newBudget >= 20000) {
            alert('The value cannot exceed than 20000');
        }
    }
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
            dispatch({type: 'CHG_CURRENCY', payload: newCurrency})
    }
    return (
        <div>
            <div className='alert alert-secondary'>
                <span>Budget: {currency} </span>
                <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
            </div>
            <div>
                <select className="custom-select" id="currency" onChange={handleCurrencyChange}>
                    <option defaultValue value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppe</option>
                </select>
            </div>
        </div>
    );
};
export default Budget;