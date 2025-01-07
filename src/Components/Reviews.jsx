import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto">
      {/* Header div */}
      <div data-aos="fade">
        <h1 className="text-4xl font-bold text-center">Customer Reviews</h1>
      </div>
      {/* Header div */}

      {/* Review card div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10" data-aos="fade-up">
        {reviews.map((productReview, idx) => (
          <ReviewCard productReview={productReview} key={idx}></ReviewCard>
        ))}
      </div>
      {/* Review card div */}
    </div>
  );
};

export default Reviews;
