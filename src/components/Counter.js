import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isVisible = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };
  
  const incrementbyHandler = () => {
    dispatch({type: 'increase', payload: 5});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };
  
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        isVisible ?      
      <>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementbyHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      </>
      : null }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
