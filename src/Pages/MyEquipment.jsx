import { useContext, useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const MyEquipment = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [emailProducts, setEmailProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-theta-one.vercel.app/myequipment?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEmailProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteProduct = (id) => {
    // Deleting from the database here
    fetch(`https://assignment-10-server-theta-one.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingProducts = emailProducts.filter(
            (product) => product._id !== id
          );
          setEmailProducts(remainingProducts);
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {/* Navbar Div here */}
      <header>
        <NavBar></NavBar>
      </header>
      {/* Navbar Div here */}

      {/* My Equipment Header div here */}
      <div className="pt-36">
        <Slide direction="right">
          <h1 className="text-4xl font-bold text-center">My Equipment List</h1>
        </Slide>
        <Slide direction="left">
          <p className="text-base mt-4 text-center font-medium">
            Here you will see the products you have added! This will help you
            make your own wishlist and help you to keep track of your choice and
            its current status!
          </p>
        </Slide>
      </div>
      {/* My Equipment Header div here */}

      {/* Product List Div here */}
      <div className="mt-10 max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto">
      <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-base">Product Name</th>
                <th className="text-base">Product Category</th>
                <th className="text-base">Product Stock</th>
                <th className="text-base">Product Price</th>
                <th className="text-base">Product Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {emailProducts.map((product, idx) => (
                <tr key={product._id}>
                  <th>{idx + 1}</th>
                  <td>{product.itemName}</td>
                  <td>{product.itemCategory}</td>
                  <td>{product.itemStock}</td>
                  <td>{product.itemPrice}$</td>
                  <Link to={`/products/${product._id}`}>
                    <td className="btn btn-ghost">View Details</td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      {/* Product List Div here */}

      {/* Footer Div here */}
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
      {/* Footer Div here */}
    </div>
  );
};

export default MyEquipment;
