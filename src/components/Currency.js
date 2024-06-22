import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const currencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    }

    return (
        <div className='alert alert-success'>
            <label>Currency (</label>
            <select value={currency} onChange={currencyChange} style={{ border: 'none', backgroundColor: '#d2e7d6'  }}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            <label>)</label>
        </div>
    );
}

export default Currency;