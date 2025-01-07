import { FaLocationArrow } from "react-icons/fa";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2";

const Support = () => {
  const handleContactMe = (e) => {
    e.preventDefault();
    const form = e.target;
    Swal.fire({
      title: "Message Send!",
      text: "You have successfully sent your message, Please wait we will contact you shortly!",
      icon: "success",
    });
    form.reset();
  };
  return (
    <div>
      {/* navbar */}
      <header>
        <NavBar></NavBar>
      </header>
      {/* navbar */}

      {/* header div */}
      <div className="pt-36">
        <h1 className="text-4xl font-bold text-center">Support</h1>
        <p className="mt-5 text-center font-medium">
          Do you need any kind of support? Please fill out the form below so
          that we can in contact with you!
        </p>
      </div>
      {/* header div */}

      {/* content */}
      <main className="bg-base-300 p-5 mt-5">
        <div>
          {/* Input field div here */}
          <div>
            <form
              onSubmit={handleContactMe}
              className="mt-16 max-w-[90%] xl:max-w-[60%] mx-auto"
            >
              {/* name and email field */}
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-4 lg:w-[48%]">
                  <span className="text-base font-normal text-black">
                    Your Name*
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    className="input w-full"
                  />
                </div>

                <div className="flex flex-col gap-4 lg:w-[48%]">
                  <span className="text-base font-normal text-black">
                    Your Email*
                  </span>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input w-full"
                  />
                </div>
              </div>
              {/* name and email field */}

              {/* Message textarea field */}
              <div className="flex flex-col gap-4 mt-8">
                <span className="text-base font-normal text-black">
                  Your Message*
                </span>
                <textarea
                  className="textarea h-[200px]"
                  name="message"
                  placeholder="Write Your Message"
                ></textarea>
              </div>
              {/* Message textarea field */}

              {/* Send a message button */}
              <button className="btn bg-[#343434] rounded-full text-xl font-medium border-none text-white mt-16">
                Send Message
                <FaLocationArrow></FaLocationArrow>
              </button>
              {/* Send a message button */}
            </form>
          </div>
          {/* Input field div here */}
        </div>
      </main>
      {/* content */}

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Support;
