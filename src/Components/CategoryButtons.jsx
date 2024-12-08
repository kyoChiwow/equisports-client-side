import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CategoryButtons = ({ productDataCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  //   Handle Click Function here
  const handleCategory = (category) => {
    productDataCategory(category);
    setActiveCategory(category);
  };

  // Fetching All product data for the categories
  useEffect(() => {
    fetch("https://assignment-10-server-theta-one.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        // Now mapping through this data to create the categories array
        const categoriesArray = [
          "All",
          ...new Set(data.map((product) => product.itemCategory)),
        ];
        setCategories(categoriesArray);
      });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
      {categories.map((category, idx) => (
        <button
          onClick={() => handleCategory(category)}
          className={`${
            activeCategory === category
              ? "btn btn-accent"
              : "btn btn-outline btn-secondary"
          }`}
          key={idx}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

CategoryButtons.propTypes = {
  productDataCategory: PropTypes.func.isRequired,
};
export default CategoryButtons;
