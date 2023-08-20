// ReviewItem.js
function ReviewItem({ review }) {
  return (
    <div className="carousel__item">
      <div className="carousel__item--wrapper">
        <figure className="star-rating">
          {Array.from({ length: review.star }, (_, index) => (
            <img
              key={index}
              src="src/assets/starFill.svg"
              alt="채워진별"
              width={29}
              height={27}
            />
          ))}
          {Array.from({ length: 5 - review.star }, (_, index) => (
            <img
              key={index}
              src="src/assets/starNonFill.svg"
              alt="안채워진별"
              width={29}
              height={27}
            />
          ))}
        </figure>
        <h3 className="carousel__item--title">{review.title}</h3>
        <blockquote className="carousel__item--quotation">
          <p className="carousel__item--comment"> {review.description}</p>
          <cite className="carousel__item--reviewer">{review.writer}</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default ReviewItem;
