import { Link } from "react-router-dom";
import error404 from "/error404.png";
const Error404 = () => {
  return (
    <div>
      {/* Image div */}
      <div className="flex justify-center items-center mt-40">
        <img className="w-[350px] md:w-[450px] lg:w-[500px] xl:w-[550px] rounded-xl" src={error404} alt="" />
      </div>
      {/* Image div */}
      {/* Button div */}
      <div className="flex justify-center items-center mt-10">
        <Link to={"/"}>
          <button className="btn btn-success">Go Back Home Please!</button>
        </Link>
      </div>
      {/* Button div */}
    </div>
  );
};

export default Error404;
