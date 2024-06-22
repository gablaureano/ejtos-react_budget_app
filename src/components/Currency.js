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
        <div className='alert'>
            <label>Currency (</label>
            <select value={currency} onChange={currencyChange} style={{ border: 'none' }}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
            </select>
            <label>)</label>
        </div>
    );
}

export default Currency;