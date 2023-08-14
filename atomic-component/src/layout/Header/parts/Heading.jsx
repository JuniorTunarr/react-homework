import "../Header.css";
function Heading() {
  return (
    <h1>
      <span className="a11yHidden">엘리스</span>
      <img
        src="/src/assets/elice.svg"
        alt="엘리스 로고"
        width={95}
        height={28}
      />
    </h1>
  );
}

export default Heading;
