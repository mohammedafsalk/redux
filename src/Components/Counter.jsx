import { useSelector, useDispatch } from "react-redux";
import { downCount, upCount } from "../Store/Slices/counterSlice";

function Counter() {
  const value = useSelector(state => state.count.value);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(upCount(value));
  };
  const minus = () => {
    dispatch(downCount(value));
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The Count is : {value}</h3>
      <button onClick={add}>Increase</button>
      <button onClick={minus}>Decrease</button>
    </div>
  );
}

export default Counter;
