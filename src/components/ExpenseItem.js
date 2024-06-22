import React, { useContext } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='1.5em' onClick={event=> increaseAllocation(props.name)} color='green'></FaPlusCircle></td>
        <td><FaMinusCircle size='1.5em' onClick={event=> decreaseAllocation(props.name)} color='red'></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;

