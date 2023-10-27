import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByamount} from '../actions';


function Counter({name}) {
  const state = useSelector(state => state);
  const counter = state.counter;
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  return (
    <div>
        <h2 data-testid='counter'>{counter}</h2>
        <button onClick={ () => dispatch(increment())}>+</button>
        <button onClick={ () => dispatch(decrement())}>-</button>
        <input type='number' value = {incrementAmount} onChange = {e => setIncrementAmount(e.target.value)} />
        <button onClick={ () => dispatch(incrementByamount(Number(incrementAmount)))}>Add amount</button>
    </div>
  );
}

export default Counter;
