import React, { useState } from 'react';
import { addCustomer as addCustomerAction } from './slices/CustomerSlice';
import { useDispatch } from 'react-redux';

const AddCustomer = () => {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();

    const  addCustomer = (event) =>{
        event.preventDefault();
        dispatch(addCustomerAction(input));
        setInput('');
    }

  return (
    <div>
        <form onSubmit={addCustomer}>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter the customer name' required/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddCustomer