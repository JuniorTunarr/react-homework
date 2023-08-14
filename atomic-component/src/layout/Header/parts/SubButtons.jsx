import "../Header.css";
import Button from "./Button";

const SubButtons = () => {
  return (
    <div className="SubButtons">
      <Button type="language" />
      <Button type="login" />
      <Button type="ask" />
    </div>
  );
};

export default SubButtons;
