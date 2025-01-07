import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Contact = () => {
  return (
    <div>
      {/* Navbar div */}
      <header>
        <NavBar></NavBar>
      </header>
      {/* Navbar div */}

      {/* header div */}
      <div className="pt-36">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="mt-5 text-center font-medium">
          Do you need to get in touch with us in person? We have given our
          address below, If you can make the time we will certainly be of
          assistence to you!
        </p>
      </div>
      {/* header div */}

      {/* Contact div */}
      <main className="bg-base-300 mt-5 min-h-[600px]">
        <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto gap-10 flex flex-col lg:flex-row justify-between lg:items-center p-10">

          <div>
            <h1 className="font-bold text-xl mb-2">Address</h1>
            <p className="font-medium">
              EquiSports Headquarters
            </p>
            <p className="font-medium">123 Sports Avenue</p>
            <p className="font-medium">Athletica City</p>
            <p className="font-medium">AC 45678</p>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-2">Phone</h1>
            <p className="font-medium">+1 (800) 123-4567</p>

            <h1 className="font-bold text-xl my-2">Email</h1>
            <p className="font-medium">support@equisports.com</p>
          </div>

          <div>
            <h1 className="font-bold text-xl mb-2">Business Hours:</h1>
            <p className="font-medium">Monday to Friday: 9:00 AM – 6:00 PM</p>
            <p className="font-medium">Saturday: 10:00 AM – 4:00 PM</p>
            <p className="font-medium">Sunday: Closed</p>
          </div>
        </div>
      </main>
      {/* Contact div */}

      {/* Footer div */}
      <footer>
        <Footer></Footer>
      </footer>
      {/* Footer div */}
    </div>
  );
};

export default Contact;
