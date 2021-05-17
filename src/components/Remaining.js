import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total += item.cost, 0)
    const remaining = budget - totalExpenses;
    const alertType = remaining >=0 ? 'alert-success' : 'alert-danger';
    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${remaining}</span>
        </div>
    )
}
export default Remaining;