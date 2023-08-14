import "../Header.css";
function MenuList({ title, hasSubMenu }) {
  return (
    <li>
      <button className="defaultMenu">
        <span className="defaultText">{title}</span>
        {hasSubMenu === "yes" ? (
          <span>
            <img src="/src/assets/arrow.svg" className="menuImage" />
          </span>
        ) : (
          ""
        )}
      </button>
    </li>
  );
}

export default MenuList;
