import MenuList from "./MenuList";

function MenuLists() {
  return (
    <ul className="MenuLists">
      <MenuList title="제품 소개" hasSubMenu="yes" />
      <MenuList title="교육 콘텐츠" hasSubMenu="yes" />
      <MenuList title="솔루션" hasSubMenu="no" />
      <MenuList title="고객사례" hasSubMenu="no" />
      <MenuList title="뉴스룸" hasSubMenu="no" />
      <MenuList title="엘리스" hasSubMenu="yes" />
    </ul>
  );
}

export default MenuLists;
