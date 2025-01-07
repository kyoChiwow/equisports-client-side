import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import MyEquipCard from "../Components/MyEquipCard";

const AllEquipments = () => {
  const products = useLoaderData();
  const [sortProducts, setSortProducts] = useState(products);
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    if(!sorted) {
      const sorting = [...sortProducts].sort((a,b) => b.itemPrice - a.itemPrice)
      setSortProducts(sorting)
    }
    else {
      setSortProducts(products)
    }
    setSorted(!sorted)
  };
  return (
    <div>
      {/* Navbar */}
      <div>
        <NavBar></NavBar>
      </div>
      {/* Navbar */}

      {/* All Products Header div */}
      <div className="pt-36 text-center">
        <Fade delay={1e3} cascade damping={1e-1}>
          <h1 className="text-4xl font-bold">All Equipments List</h1>
        </Fade>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="text-base mt-4 text-center font-medium xl:max-w-[50%] mx-auto">
            A list of all the products we have, helping you to make better
            choices!
          </p>
        </Fade>
        <div className="mt-4">
          <button onClick={handleSort} className="btn">Sort By Price</button>
        </div>
      </div>
      {/* All Products Header div */}

      {/* Products */}
      <div className="mt-10">
        <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {sortProducts.map((emailProduct, idx) => (
                <MyEquipCard
                key={idx}
                product={emailProduct}
              ></MyEquipCard>
              ))}
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
