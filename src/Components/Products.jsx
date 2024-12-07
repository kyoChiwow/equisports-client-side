import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import CategoryButtons from "./CategoryButtons";
import ProductCard from "./ProductCard";
import { Fade, Slide } from "react-awesome-reveal";
import Loading from "../Pages/Loading";

const Products = () => {
  // All States here
  const [products, setProducts] = useState([]);

  const [basedProducts, setBasedProducts] = useState([]);
  // Calling context here to set the loading thing
  const { loading, setLoading } = useContext(AuthContext);

  //   Function for category product view
  const handleShowProduct = (category) => {
    if (category === "All") {
      setBasedProducts(products);
    } else {
      const categoryBasedProducts = products.filter(
        (product) => product.itemCategory === category
      );
      setBasedProducts(categoryBasedProducts);
    }
  };


  // Fetching the data here is useEffect
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setBasedProducts(data);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading) {
    return <Loading></Loading>
  }
  
  return (
    <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto">
      {/* Product header div */}
      <header>
        <Fade delay={1e3} cascade damping={1e-1}>
          <h1 className="text-4xl font-bold text-center mb-4">
            EquiSports Products
          </h1>
        </Fade>
        <Slide>
          <p className="text-base font-medium text-center">
            Check out our products below and choose your favorite!
          </p>
        </Slide>
      </header>
      {/* Product header div */}

      {/* Product Category Buttons Div */}
      <Slide direction="right">
        <div className="mt-5">
          <CategoryButtons
            productDataCategory={handleShowProduct}
          ></CategoryButtons>
        </div>
      </Slide>
      {/* Product Category Buttons Div */}

      {/* Products div here */}
      <main className="mt-10">
        {/* Card div */}
        {loading ? (
          <Loading></Loading>
        ) : (
          <div
            className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-down"
          >
            {basedProducts.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        )}
        {/* Card div */}
      </main>
      {/* Products div here */}
    </div>
  );
};

export default Products;
