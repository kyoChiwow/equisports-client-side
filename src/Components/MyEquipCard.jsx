import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const MyEquipCard = ({ product, onDelete }) => {
  const { _id, itemPhoto, itemName, itemPrice, itemRating, itemStock } =
    product;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(_id);
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {/* Card Wrapping Div */}
      <div className="bg-base-200 rounded-xl flex flex-col items-center justify-center shadow-lg">
        {/* Image div */}
        <div className="my-4 px-4 lg:mx-0">
          <img
            className="w-[350px] h-[250px] object-fill rounded-xl"
            src={itemPhoto}
            alt={itemName}
          />
        </div>
        {/* Image div */}

        {/* Info Div */}
        <div>
          <p className="text-lg font-medium mb-2">
            Product: <span className="font-bold">{itemName}</span>
          </p>
          <p className="text-lg font-medium mb-2">
            Price: <span className="font-bold">{itemPrice}$</span>
          </p>
          <p className="text-lg font-medium mb-2">
            Rating: <span className="font-bold">{itemRating}</span>
          </p>
          <p className="text-lg font-medium">
            Remaining Stock: <span className="font-bold">{itemStock}</span>
          </p>
        </div>
        {/* Info Div */}

        {/* View Details Button Div */}
        <div className="mt-8 mb-4 flex gap-4">
          <Link to={`/updateproduct/${_id}`}>
            <button className="btn btn-warning font-bold">Update</button>
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-error btn-outline font-bold"
          >
            Delete
          </button>
        </div>
        {/* View Details Button Div */}
      </div>
      {/* Card Wrapping Div */}
    </div>
  );
};

MyEquipCard.propTypes = {
  product: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default MyEquipCard;
