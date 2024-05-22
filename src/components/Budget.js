
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newBudget = Number(event.target.value);
        dispatch({type:'SET_BUDGET', payload: newBudget})
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £ </span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;