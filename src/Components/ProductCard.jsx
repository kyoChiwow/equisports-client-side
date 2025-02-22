import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, itemPhoto, itemName, itemPrice, itemRating, itemStock } = product;
    return (
        <div>
            {/* Card Wrapping Div */}
            <div className="bg-base-200 rounded-xl flex flex-col  justify-between shadow-lg h-[600px]">
                {/* Image div */}
                <div className="p-6">
                    <img className="w-[350px] h-[250px] object-fill rounded-xl" src={itemPhoto} alt={itemName} />
                </div>
                {/* Image div */}

                {/* Info Div */}
                <div className="p-6">
                    <p className="text-lg font-medium mb-2">Product: <span className="font-bold">{itemName}</span></p>
                    <p className="text-lg font-medium mb-2">Price: <span className="font-bold">{itemPrice}$</span></p>
                    <p className="text-lg font-medium mb-2">Rating: <span className="font-bold">{itemRating}</span></p>
                    <p className="text-lg font-medium">Remaining Stock: <span className="font-bold">{itemStock}</span></p>
                </div>
                {/* Info Div */}

                {/* View Details Button Div */}
                <div className="w-full">
                    <Link to={`/products/${_id}`}><button className="btn btn-warning w-full rounded-b-xl rounded-t-none font-bold">View Details</button></Link>
                </div>
                {/* View Details Button Div */}
            </div>
            {/* Card Wrapping Div */}
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}
export default ProductCard;