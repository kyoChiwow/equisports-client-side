import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const AboutUs = () => {
  return (
    <div>
      {/* Navbar div */}
      <header>
        <NavBar></NavBar>
      </header>
      {/* Navbar div */}

      {/* header div */}
      <div className="pt-36">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </div>
      {/* header div */}

      {/* About us content div */}
      <main className="bg-base-300 mt-5">
        <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto p-6">
          <p>
            Welcome to <span className="font-bold">EquiSports</span>, the
            ultimate destination for premium sports equipment and accessories.
            At EquiSports, we believe that sports are more than just games –
            they are a lifestyle, a passion, and a journey of excellence. Our
            mission is to empower athletes, fitness enthusiasts, and sports
            lovers worldwide with the tools they need to push boundaries,
            achieve greatness, and enjoy the thrill of every moment.
          </p>
          <p className="mt-4">
            <h1 className="font-bold text-xl mb-2">Who We Are</h1> EquiSports
            was born from a vision to bridge the gap between athletes and
            top-tier sports gear. We understand the demands of professional
            athletes, the aspirations of fitness enthusiasts, and the joy of
            casual players seeking the perfect equipment. With this in mind,
            we’ve meticulously curated a collection of high-end sports products
            that blend performance, durability, and style. Our commitment to
            quality is unwavering. Each product in our inventory is handpicked
            and rigorously evaluated to meet the highest standards. Whether you
            are a seasoned professional or just beginning your fitness journey,
            EquiSports ensures that you have access to the finest gear to
            elevate your game.
          </p>

          <p className="mt-4">
            <h1 className="font-bold text-xl mb-4">What We Offer</h1>
            <p className="font-bold mb-2">1. Premium Sports Gear</p>
            At EquiSports, we pride ourselves on offering an unparalleled
            selection of sports equipment and accessories. From advanced racket
            sports gear like lightweight carbon fiber tennis rackets and
            professional squash rackets to team sports essentials such as
            basketballs and footballs, we have something for everyone. Dive into
            our range of outdoor adventure gear like waterproof hiking backpacks
            or innovative water sports accessories such as full-face snorkeling
            masks. Every product is designed to inspire confidence and enhance
            performance. <br />
            <p className="font-bold my-2">2. Personalized Product Experience</p>
            We know that finding the perfect product is essential. That’s why
            our dynamic product pages provide detailed specifications,
            high-resolution images, and comprehensive descriptions. Our
            intuitive interface allows customers to browse, compare, and
            customize products effortlessly, ensuring an informed shopping
            experience tailored to individual needs.
            <p className="font-bold my-2">
              3. Interactive Cart and Wishlist Management
            </p>
            Shopping should be as seamless as your game on the field or court.
            Our advanced cart and wishlist system enables users to organize
            their favorite products with ease. From tracking your selections to
            reviewing and modifying your list before purchase, EquiSports makes
            managing your shopping experience a breeze. We value your time and
            aim to simplify the process so you can focus on what truly matters:
            your passion for sports.
            <p className="font-bold my-2">4. Seamless Authentication</p>
            Security and convenience are at the core of EquiSports. With
            Firebase integration, we offer smooth and secure user
            authentication. Whether you prefer to log in with email or Google
            sign-in, your data is managed with the utmost care. This ensures a
            hassle-free experience, allowing you to dive straight into browsing
            and shopping without any delays.
            <p className="font-bold my-2">5. A Cutting-Edge User Experience</p>
            EquiSports is not just an e-commerce platform – it’s an experience.
            Built with Tailwind CSS and DaisyUI, our website boasts a modern,
            aesthetically pleasing design that adapts to every screen size.
            Whether you’re shopping from a desktop, tablet, or mobile device,
            our responsive interface ensures a seamless experience. Every
            detail, from the sleek design to the intuitive navigation, is
            crafted to provide a premium online shopping environment.
          </p>

          <p className="">
            {" "}
            <h1 className="font-bold text-xl mt-4 mb-2">Our Promise</h1>
            At EquiSports, we’re not just selling products – we’re supporting
            your passion. Our team is dedicated to delivering an exceptional
            customer experience, from the moment you land on our website to the
            time your gear arrives at your doorstep. We’re here to answer your
            questions, guide you in making the right choices, and ensure your
            satisfaction at every step. We believe in building relationships,
            not just transactions. Our commitment to quality, service, and
            innovation has earned the trust of our growing community of athletes
            and enthusiasts. Whether you’re preparing for a championship,
            gearing up for a weekend adventure, or looking for the perfect gift
            for a sports lover, EquiSports is your partner in performance.
          </p>
        </div>
      </main>
      {/* About us content div */}

      {/* footer div */}
      <footer>
        <Footer></Footer>
      </footer>
      {/* footer div */}
    </div>
  );
};

export default AboutUs;
