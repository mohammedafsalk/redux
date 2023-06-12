function Counter({ count, setCount }) {
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The Count is : {count}</h3>
      <button onClick={add}>Increase</button>
      <button onClick={minus}>Decrease</button>
    </div>
  );
}

export default Counter;
