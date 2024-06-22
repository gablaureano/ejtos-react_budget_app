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
            <label>Currency</label>
            <select value={currency} onChange={currencyChange}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
            </select>
        </div>
    );
}

export default Currency;