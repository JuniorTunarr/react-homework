function ShowItems() {
  const cases = [
    {
      id: 1,
      title: "Cross Direction Carousel",
      description:
        "양 방향(↑/↓) 슬라이딩 되며 화면에 표시되는 캐러셀 UI 컴포넌트 디자인",
    },
    {
      id: 2,
      title: "Video Opening Animation",
      description:
        "비디오 재생과 동시에 회전, 크기 애니메이션 되며 화면을 가득 채우는 UI 디자인",
    },
    {
      id: 3,
      title: "Transition & Custom Cursor",
      description:
        "페이지 트랜지션 시 광고 페이지를 보여주며, 커스텀 커서 UI 인터랙션 디자인",
    },
    {
      id: 4,
      title: "FEML 2019 Microsite",
      description: (
        <>
          Front-End Masters League 2019
          <br />
          블렌디드 러닝 모집 마이크로 사이트
        </>
      ),
    },
  ];
  return (
    <ul className="react-multi-carousel-track">
      {cases.map((caseItem) => (
        <li key={caseItem.id} className="react-multi-carousel-item">
          <div
            className="carousel__item"
            style={{
              background: `
                linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(38, 43, 66, 0.55) 55%),
                url(src/assets/showcase${caseItem.id}.jpg) center center / cover no-repeat`,
            }}
          >
            <div className="carousel__item--wrapper">
              <a href="" className="carousel__item--link">
                <h3 className="carousel__item--title">{caseItem.title}</h3>
                <p className="carousel__item--description">
                  {caseItem.description}
                </p>
                <img
                  src="/src/assets/carouselArrow1.svg"
                  alt="바로가기 화살표"
                  className="tracking-[-0.02em] select-none w-[16] h-[16] box-border opacity-100 absolute right-5 bottom-[22px]"
                />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ShowItems;
