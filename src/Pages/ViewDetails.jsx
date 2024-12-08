import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Fade } from "react-awesome-reveal";
import ReactStars from "react-rating-stars-component";
import "font-awesome/css/font-awesome.min.css";

const ViewDetails = () => {
  const product = useLoaderData();
  const { setLoading } = useContext(AuthContext);

  useEffect(() => {
    if (product) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [product, setLoading]);
  const {
    itemName,
    itemCategory,
    itemPhoto,
    itemDescription,
    itemCustomization,
    itemTime,
    itemPrice,
    itemRating,
    itemStock,
  } = product;

  const itemRatingStars = {
    size: 24,
    count: 5,
    edit: false,
    color: "black",
    activeColor: "#ffd700",
    value: itemRating,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };

  return (
    <div>
      {/* Navbar Div */}
      <header>
        <NavBar></NavBar>
      </header>
      {/* Navbar Div */}

      {/* Product details header div */}
      <div className="my-10">
        <Fade delay={1e3} cascade damping={1e-1}>
          <h1 className="text-4xl font-bold text-center">Product Details</h1>
          <p className="font-medium text-center mt-4 text-base">
            Here you will find the details and other information about this
            specific product!
          </p>
        </Fade>
      </div>
      {/* Product details header div */}

      {/* Main Card div */}
      <main>
        {/* Card Wrapping div */}
        <div className="bg-base-200 p-2">
          {/* Image div */}
          <div className="flex justify-center items-center">
            <img
              className="w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] rounded-xl shadow-xl"
              src={itemPhoto}
              alt={itemName}
            />
          </div>
          {/* Image div */}

          {/* Information div */}
          <div className="mt-8 md:max-w-[80%] mx-auto bg-white rounded-xl shadow-xl">
            <div className="px-4 pt-4">
              <p className="text-lg font-medium mb-2 text-black">
                Product:{" "}
                <span className="font-bold text-black">{itemName}</span>
              </p>
              <p className="text-lg font-medium mb-2 text-black">
                Category:{" "}
                <span className="font-bold text-black">{itemCategory}</span>
              </p>
              <p className="text-lg font-medium mb-2 text-black">
                Customization Details:{" "}
                <span className="font-bold text-black">
                  {itemCustomization}
                </span>
              </p>
              <p className="text-lg font-medium mb-2 text-black">
                Product Descrition:{" "}
                <span className="font-bold text-black">{itemDescription}</span>
              </p>
              <p className="text-lg font-medium mb-2 flex items-center gap-4 text-black">
                Product Rating:{" "}
                <div className="bg-gray-300 rounded-full p-4">
                  <p className="font-semibold text-black">{itemRating}</p>{" "}
                </div>
                <span className="font-bold text-black">
                  {" "}
                  <ReactStars {...itemRatingStars}></ReactStars>
                </span>
              </p>
              <p className="text-lg font-medium mb-2 text-black">
                Product Price:{" "}
                <span className="font-bold text-black">{itemPrice}$</span>
              </p>
              <p className="text-lg font-medium mb-2 text-black">
                Product Stock:{" "}
                <span className="font-bold text-black">{itemStock}</span>
              </p>
              <p className="text-lg font-medium mb-2 text-black">
                Processing Time:{" "}
                <span className="font-bold text-black">{itemTime}</span>
              </p>
            </div>

            {/* Home Button Div */}
            <div className="mt-8 w-full">
              <Link to={"/"}>
                <button className="btn btn-success w-full rounded-b-xl rounded-t-none text-xl">Back To Home</button>
              </Link>
            </div>
            {/* Home Button Div */}
          </div>
          {/* Information div */}
        </div>
        {/* Card Wrapping div */}
      </main>
      {/* Main Card div */}

      {/* Footer Div */}
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
      {/* Footer Div */}
    </div>
  );
};

export default ViewDetails;
