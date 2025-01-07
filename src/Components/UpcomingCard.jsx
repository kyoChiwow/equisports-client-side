import { useEffect, useState } from "react";

const UpcomingCard = () => {
  const [upcomingPro, setUpcomingPro] = useState([]);
  useEffect(() => {
    fetch("/upcomingProducts.json")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingPro(data);
      });
  }, []);
  return (
    <div>
      {/* Header div */}
      <div>
        <h1 className="text-4xl font-bold text-center">
          Our Upcoming Products
        </h1>
        <p className="text-base mt-4 text-center font-medium xl:max-w-[50%] mx-auto">
          These products will arrive within the next quarter. So hold your
          breath and choose your products because they might take your breath
          away!
        </p>
      </div>
      {/* Header div */}

      {/* card div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto mt-8">
        {upcomingPro.map((pro, idx) => (
          <div key={idx}>
            {/* Card Wrapping Div */}
            <div className="bg-base-200 rounded-xl flex flex-col justify-between shadow-lg h-[700px]">
              {/* Image div */}
              <div className="my-4 px-4 lg:mx-0">
                <img
                  className="w-[350px] h-[250px] object-fill rounded-xl"
                  src={pro.productImage}
                  alt={pro.productImage}
                />
              </div>
              {/* Image div */}

              {/* Info Div */}
              <div className="p-4">
                <p className="text-lg font-medium mb-2">
                  Product: <span className="font-bold">{pro.productName}</span>
                </p>
                <p className="text-lg font-medium mb-2">
                  Description: <span className="font-bold">{pro.productDescription}</span>
                </p>
                
              </div>
              {/* Info Div */}

              {/* View Details Button Div */}
              <div className="mt-8 w-full">
                  <button className="btn btn-warning w-full rounded-b-xl rounded-t-none font-bold">Coming Soon</button>
              </div>
              {/* View Details Button Div */}
            </div>
            {/* Card Wrapping Div */}
          </div>
        ))}
      </div>
      {/* card div */}
    </div>
  );
};

export default UpcomingCard;
