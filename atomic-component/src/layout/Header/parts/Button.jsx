function Button({ type }) {
  let buttonContent;
  let buttonText = "";
  let buttonClass = "";

  switch (type) {
    case "language":
      buttonText = "";
      buttonClass = "language";
      break;
    case "login":
      buttonText = "로그인";
      buttonClass = "login";
      break;
    case "ask":
      buttonText = "도입문의";
      buttonClass = "ask";
      break;
  }
  return (
    <button className={buttonClass}>
      <span className={buttonClass === "language" ? "language-icon" : null}>
        {buttonText}
      </span>
    </button>
  );
}

export default Button;
