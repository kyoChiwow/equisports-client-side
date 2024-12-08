import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Fade } from "react-awesome-reveal";

const AllEquipments = () => {
  const products = useLoaderData();
  return (
    <div>
      {/* Navbar */}
      <div>
        <NavBar></NavBar>
      </div>
      {/* Navbar */}

      {/* All Products Header div */}
      <div className="mt-8 text-center">
        <Fade delay={1e3} cascade damping={1e-1}>
          <h1 className="text-4xl font-bold">All Equipments List</h1>
        </Fade>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="text-base mt-4 text-center font-medium xl:max-w-[50%] mx-auto">
            A list of all the products we have, helping you to make better
            choices!
          </p>
        </Fade>
      </div>
      {/* All Products Header div */}

      {/* Products */}
      <div className="bg-base-300 mt-10">
        <div className="overflow-x-auto max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto">
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
              {products.map((product, idx) => (
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
      </div>
      {/* Products */}

      {/* Footer Div */}
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
      {/* Footer Div */}
    </div>
  );
};

export default AllEquipments;
