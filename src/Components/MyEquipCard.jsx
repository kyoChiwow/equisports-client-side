import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MyEquipCard = ({ product }) => {
    const { _id, itemPhoto, itemName, itemPrice, itemRating, itemStock } = product;
    return (
        <div>
            {/* Card Wrapping Div */}
            <div className="bg-base-200 rounded-xl flex flex-col items-center justify-center shadow-lg">
                {/* Image div */}
                <div className="my-4 px-4 lg:mx-0">
                    <img className="w-[350px] h-[250px] object-fill rounded-xl" src={itemPhoto} alt={itemName} />
                </div>
                {/* Image div */}

                {/* Info Div */}
                <div>
                    <p className="text-lg font-medium mb-2">Product: <span className="font-bold">{itemName}</span></p>
                    <p className="text-lg font-medium mb-2">Price: <span className="font-bold">{itemPrice}$</span></p>
                    <p className="text-lg font-medium mb-2">Rating: <span className="font-bold">{itemRating}</span></p>
                    <p className="text-lg font-medium">Remaining Stock: <span className="font-bold">{itemStock}</span></p>
                </div>
                {/* Info Div */}

                {/* View Details Button Div */}
                <div className="mt-8 mb-4 flex gap-4">
                    <Link to={`/updateproduct/${_id}`}><button className="btn btn-warning font-bold">Update</button></Link>
                    <Link to={`/products/${_id}`}><button className="btn btn-error btn-outline font-bold">Delete</button></Link>
                </div>
                {/* View Details Button Div */}
            </div>
            {/* Card Wrapping Div */}
        </div>
    );
};

MyEquipCard.propTypes = {
    product: PropTypes.object.isRequired,
}
export default MyEquipCard;