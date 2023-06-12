import Aside from "./Aside";
import Counter from "./Counter";

function Main({ count, setCount, color, setColor }) {
  return (
    <div className="main">
      <Counter count={count} setCount={setCount} />
      <Aside color={color} setColor={setColor} />
    </div>
  );
}
export default Main;
