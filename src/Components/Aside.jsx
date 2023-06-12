import randomColor from "randomcolor";

function Aside({ color, setColor }) {
  const currentColor = randomColor();

  const Changer = () => {
    setColor(currentColor);
  };

  return (
    <div className="aside">
      <h2 style={{ color }}>Aside</h2>
      <button onClick={Changer}>Change Color</button>
    </div>
  );
}

export default Aside;
