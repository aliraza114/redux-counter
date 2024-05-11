import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const isVisible = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.incremnt());
  };
  
  const incrementbyHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
