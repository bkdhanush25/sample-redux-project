import React from 'react';
import { incrementNumber, decrementNumber } from './slices/NumberSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddNumber = () => {
    const numbers = useSelector((state) => state.numbers.number)
    const dispatch = useDispatch();

  return (
    <div>
      <h3>Add Number</h3>
      <button onClick={() => dispatch(incrementNumber())}>+</button>
      <p>{numbers}</p>
      <button onClick={() => dispatch(decrementNumber())}>-</button>
    </div>
  )
}

export default AddNumber
