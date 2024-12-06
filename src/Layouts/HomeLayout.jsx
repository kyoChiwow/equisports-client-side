import { useEffect } from "react";
import Banner from "../Components/Banner";
import NavBar from "../Components/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";


const HomeLayout = () => {
  // AOS Animation here
  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
      offset: 100,
      delay: 40,
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
      <header data-aos="fade-down">
        <NavBar></NavBar>
      </header>
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
