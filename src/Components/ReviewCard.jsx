import PropTypes from "prop-types";

const ReviewCard = ({ productReview }) => {
    const { product_name, rating, review, user_avatar, customer_name } = productReview;
    return (
        <div>
            {/* Card Wrapping div */}
            <div className="bg-base-300 shadow-xl rounded-xl p-6 flex gap-5 h-[300px]">
                {/* avatar div */}
                <img className="h-[50px] w-[50px] rounded-full" src={user_avatar} alt="" />
                {/* avatar div */}

                {/* info div */}
                <div>
                    <p className="font-medium mb-2">{product_name}</p>
                    <p className="font-medium mb-2">{customer_name}</p>
                    <p className="font-bold mb-2">{rating}</p>
                    <p className="font-bold mb-2">{review}</p>
                </div>
                {/* info div */}
            </div>
            {/* Card Wrapping div */}
        </div>
    );
};

ReviewCard.propTypes = {
    productReview: PropTypes.object.isRequired,
}
export default ReviewCard;