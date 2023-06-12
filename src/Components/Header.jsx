import { useSelector } from "react-redux";

function Header() {
  const value = useSelector((state) => state.color.value);
  const item = useSelector((state) => state.count.value);
  return (
    <div className="header">
      <h1 style={{ color: value }}>Redux project</h1>
      <h3>{item}</h3>
    </div>
  );
}

export default Header;
