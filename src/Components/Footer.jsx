import { useSelector } from "react-redux";

function Footer() {
  const color = useSelector((state) => state.color.value);
  return (
    <div className="footer">
      <h1 style={{ color }}>Footer</h1>
    </div>
  );
}

export default Footer;
