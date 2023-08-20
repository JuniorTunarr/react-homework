function CourseItems() {
  const courses = [
    {
      id: 1,
      title: "UI Structure & Design",
      tag: [
        "#웹표준",
        "#접근성",
        "#HTML",
        "#CSS",
        "#마크업",
        "#스타일링",
        "#레이아웃",
        "#애니메이션",
      ],
    },
    {
      id: 2,
      title: "UI Interaction Junior",
      tag: ["#JavaScript", "#DOM스크립트", "#이벤트핸들링", "#UI컴포넌트"],
    },
    {
      id: 3,
      title: "UI Interaction Senior",
      tag: ["#객체지향프로그래밍", "#ES6+", "#AJAX", "#REST_API"],
    },
    {
      id: 4,
      title: "React Framework",
      tag: [
        "#React",
        "#Redux",
        "#ReactRouter",
        "#StyledComponents",
        "#Firebase",
      ],
    },
  ];

  return (
    <ul className="react-multi-carousel-track carousel__slider">
      {courses.map((course) => (
        <li
          className="react-multi-carousel-item react-multi-carousel-item--active carousel__slide"
          key={course.id}
        >
          <div className="carousel__item type-course">
            <div className="carousel__item--wrapper">
              <a className="carousel__item--link" href="">
                <h3 className="carousel__title">{course.title}</h3>
                <img
                  className="carousel__item--image"
                  src={`/src/assets/carousel${course.id}.svg`}
                  alt={course.title}
                />
                <p className="carousel__item--tags">
                  {course.tag.map((tag, index) => (
                    <span key={index} className="carousel__item--tag">
                      {tag}
                    </span>
                  ))}
                </p>
                <img
                  src="/src/assets/carouselArrow.svg"
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

export default CourseItems;
