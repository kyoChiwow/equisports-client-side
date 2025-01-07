import Swal from "sweetalert2";

const Newsletter = () => {
    const handleNewsletter = (e) => {
        e.preventDefault();
        const form = e.target;
        Swal.fire({
            title: "Congratulations!",
            text: "You subscribed to our Newsletter!",
            icon: "success"
          });
          form.reset();
    }
  return (
    <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto">
      {/* Header div */}
      <div>
        <h1 className="text-4xl font-bold text-center mb-4">Our Newsletter</h1>
      </div>
      {/* Header div */}

      {/* Full Card Wrapping div */}
      <div className="bg-base-200 p-2 rounded-xl bg-opacity-50 shadow-xl">
        {/* Content Wrapping div */}
        <div className="bg-base-300 rounded-xl p-4">
          {/* header div */}
          <div className="mt-5">
            <p className="text-2xl text-center">Subscribe to our Newsletter</p>
            <p className="text-base font-medium text-center mt-2">
              Do you want the latest news about our upcoming offers and Our
              products? Then give your email below and subscribe. We have new
              updates almost everyday!
            </p>
          </div>
          {/* header div */}

          {/* input field div */}
          <form onSubmit={handleNewsletter}>
            <div className="join mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Type Your Email Here"
                name="newsletterEmail"
                className="input w-full max-w-xl join-item"
              />
              <button className="btn join-item bg-[#343434] text-white">Subscribe</button>
            </div>
          </form>
          {/* input field div */}
        </div>
        {/* Content Wrapping div */}
      </div>
      {/* Full Card Wrapping div */}
    </div>
  );
};

export default Newsletter;
