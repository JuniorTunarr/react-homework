const GlobalNavigationBar = () => {
  return (
    <nav className="globalNavigationBar fixed">
      <ul className="flex">
        <li>
          <a>소개</a>
        </li>
        <li>
          <a>과정 &gt;</a>
        </li>
        <li>
          <a>연간 일정</a>
        </li>
        <li>
          <a>학습 안내</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
        <li>
          <a>브랜드 이야기</a>
        </li>
        <li>
          <a>정책 /환불 규정</a>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNavigationBar;
