import { useEffect } from "react";
import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";
import UpcomingCard from "../Components/UpcomingCard";
import Reviews from "../Components/Reviews";
import Newsletter from "../Components/Newsletter";


const HomeLayout = () => {
  // AOS Animation here
  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
      offset: 100,
      delay: 200,
    });

    // AOS refresh on scroll
    const handleScroll = () => {
      Aos.refresh();
    };

    // Refresh AOS on scrolling
    window.addEventListener("scroll", handleScroll);

    // Refresh AOS on page load
    window.addEventListener("load", Aos.refresh);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", Aos.refresh);
    };
  }, []); // This runs only
  return (
    <div>
      {/* Navbar Div here */}
      <header className="lg:block hidden">
        <NavBar></NavBar>
      </header>
      {/* Navbar Div here */}

      {/* Navbar Div here */}
      <header className="lg:hidden block">
        <NavBar></NavBar>
      </header>
      {/* Navbar Div here */}

      {/* Banner Div here */}
      <div>
        <Banner></Banner>
      </div>
      {/* Banner Div here */}

      {/* Products Div */}
      <div className="mt-12">
        <Products></Products>
      </div>
      {/* Products Div */}

      {/* Reviews Div */}
      <div className="mt-10">
        <Reviews></Reviews>
      </div>
      {/* Reviews Div */}

      {/* FAQ Div */}
      <div className="mt-10" data-aos="fade-up-right">
        <Faq></Faq>
      </div>
      {/* FAQ Div */}

      {/* Upcoming Products Div */}
      <div className="mt-10" data-aos="fade-up-left">
        <UpcomingCard></UpcomingCard>
      </div>
      {/* Upcoming Products Div */}

      {/* Newsletter div */}
      <div className="mt-10" data-aos="fade-up">
        <Newsletter></Newsletter>
      </div>
      {/* Newsletter div */}

      {/* Footer Div */}
      <footer className="mt-10">
        <Footer></Footer>
      </footer>
      {/* Footer Div */}
    </div>
  );
};

export default HomeLayout;
