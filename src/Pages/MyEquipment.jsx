import { Slide } from "react-awesome-reveal";
import NavBar from "../Components/NavBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Footer from "../Components/Footer";
import Loading from "./Loading";
import MyEquipCard from "../Components/MyEquipCard";

const MyEquipment = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [emailProducts, setEmailProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myequipment?email=${user.email}`)
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
        fetch(`http://localhost:5000/products/${id}`, {
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
      }


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
      <div className="mt-10">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto">
        {emailProducts.map((emailProduct, idx) => (
          <MyEquipCard 
          key={idx} 
          product={emailProduct}
          onDelete= {handleDeleteProduct}
          ></MyEquipCard>
        ))}
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
