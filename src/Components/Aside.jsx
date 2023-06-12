import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../Store/Slices/colorSlice.js";
import randomColor from "randomcolor";

function Aside() {
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  const colour = randomColor();
  const changer = () => {
    dispatch(setColor({ color: colour }));
  };
  return (
    <div className="aside">
      <h2 style={{ color }}>Aside</h2>
      <button onClick={changer}>Change Color</button>
    </div>
  );
}

export default Aside;
