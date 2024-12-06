import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";

const HomeLayout = () => {
  return (
    <div>
      {/* Navbar Div here */}
      <div>
        <NavBar></NavBar>
      </div>
      {/* Navbar Div here */}

      {/* Banner Div here */}
      <div className="mt-10">
        <Banner></Banner>
      </div>
      {/* Banner Div here */}
    </div>
  );
};

export default HomeLayout;
