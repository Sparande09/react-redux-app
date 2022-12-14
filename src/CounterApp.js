
import { useState } from 'react';

export function CounterApp() {
  const [counter, setCounter]= useState(0);
  const increment = ()=> {
    setCounter(counter+1);
  };
  const decrement = () => {
    setCounter(counter-1);
  };
  return (
    <div className='counterApp'>
      <h1>Counter App</h1>
      <h2> Counter: {counter}</h2>
      
      <span className='decrementButton'> 
      <button onClick={increment} > Increment</button>
      </span>
      
      <span className='incrementButton'> 
      <button onClick={decrement} > Decrement</button>
      </span>
    </div>
  );
}

export default CounterApp;
