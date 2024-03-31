import React, { useState } from 'react';
import { incrementCustomNumber, decrementCustomNumber } from './slices/CustomNumberSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ChangeNumber = () => {
    const [ inputNumber, setInputNumber ] = useState(0);
    const customnumbers = useSelector((state) => state.customnumbers.number)
    const dispatch = useDispatch();

  return (
    <div>
        <h3>Change Custom Number</h3>
      <button onClick={() => {dispatch(incrementCustomNumber(parseInt(inputNumber, 10))); setInputNumber(0);}}>+</button>
      <input type='number' placeholder='enter the number' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}/>
      <button onClick={() => {dispatch(decrementCustomNumber(parseInt(inputNumber, 10))); setInputNumber(0);}}>-</button>
      <p>{customnumbers}</p>
    </div>
  )
}

export default ChangeNumber