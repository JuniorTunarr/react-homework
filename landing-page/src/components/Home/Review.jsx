import { useState } from "react";
import SubTitleWrapper from "../Common/SubTitleWrapper";
import ReviewItems from "./ReviewItems";

function Review() {
  const reviews = [
    {
      id: 1,
      writer: "노치0 님",
      title: "확실한건 돈은 전혀 아깝지 않았습니다.",
      description:
        "아! 만드는 과제 더 내주셨으면 좋았을 것 같았습니다. 그럼 다음에 또 찾아 뵙겠습니다.",
      star: 4,
    },
    {
      id: 2,
      writer: "전진0 님",
      title: "굉장히 만족스러운 한 달이었습니다.",
      description:
        "관리해주는 사람이 없으면 학습을 진행하기 어려웠는데 블렌디드 러닝이라는 게 있다는 것을 알아 전반적으로 만족스러웠습니다.",
      star: 5,
    },
    {
      id: 3,
      writer: "김남0 님",
      title: (
        <>
          수업은 좋았으나,
          <br /> 시간이 부족...
        </>
      ),
      description:
        "전달하고 싶은 내용이 더 있는데 시간관계상 빠르게 종결한 느낌이라 시간이 여유있었다면 더 얻어가는게 많지 않았을까? 싶습니다.",
      star: 3,
    },
    {
      id: 4,
      writer: "장다0 님",
      title: (
        <>
          수업이 더더더더!
          <br /> 시길었으면 하는 생각
        </>
      ),
      description:
        "관리해주는 사람이 없으면 학습을 진행하기 어려웠는데 블렌디드 러닝이라는 게 있다는 것을 알아 전반적으로 만족스러웠습니다.",
      star: 5,
    },
    {
      id: 5,
      writer: "조희0 님",
      title: "온라인 강의만으로 만족하기 어렵다.",
      description:
        "배우는 범위가 넓어서 주간에 들어야 할 온라인 강의가 많았지만, 공부한 만큼 오프라인 강의에서 효과가 있습니다.",
      star: 4,
    },
    {
      id: 6,
      writer: "신승0 님",
      title: "정말 좋은 질문/답변 시스템!",
      description:
        "온라인 질문/답변 시스템은 정말로 좋은 것 같습니다. 충분히 온라인의 장점을 잘 살려 질문/답변 시스템으로 궁금한 점을 해소할수 있고, 자세한 피드백이 너무나 좋았습니다.",
      star: 5,
    },
    {
      id: 7,
      writer: "김규0 님",
      title: "빠듯한 5주 간의 학습!",
      description:
        "궁금한 것들을 바로바로 질문하고 답변을 빠르게 얻을 수 있다. 하지만 온라인 강의 내용이 많아서 오프라인 수업 전까지 들을려면 빠듯하긴 했어요.",
      star: 4,
    },
    {
      id: 8,
      writer: "김종0 님",
      title: "만족도는 5점 만점에 4.5점!",
      description:
        "온라인 수업은 부족하면 계속 돌려볼 수 있지만 오프라인 수업에 복습에 대해서 약간 아쉬움이 있습니다.",
      star: 4,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < reviews.length - 4) {
      setCurrentIndex(currentIndex + 4);
    }
  };
  return (
    <div className="review">
      <SubTitleWrapper
        id="review"
        title="리뷰"
        contents="'이듬' 블렌디드 러닝 강의 수강생의 강의 리뷰입니다. 강의 장/단점에 대한 의견을 남겨주셨습니다."
      />
      <div className="review-carousel">
        <ReviewItems currentIndex={currentIndex} reviews={reviews} />
        {currentIndex > 0 && (
          <button
            type="button"
            className="carousel-control left-1 absolute w-[2.625rem] h-[1.9375rem] rotate-180 bottom-0 -translate-y-1/2"
            aria-label="이전 보기"
            onClick={handlePreviousClick}
            style={{
              background:
                "url(/src/assets/carouselControl.svg) center/cover no-repeat",
            }}
          />
        )}
        <button
          type="button"
          className="carousel-control right-5 absolute  w-[2.625rem]  h-[1.9375rem] bottom-0 -translate-y-1/6"
          aria-label="다음 보기"
          onClick={handleNextClick}
          style={{
            background:
              "url(/src/assets/carouselControl.svg) center/cover no-repeat",
          }}
        />
      </div>
    </div>
  );
}

export default Review;
