import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser, setUser, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Calling the context here to Sign In
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged into your account!",
          icon: "success",
          willClose: () => {
            navigate(location?.state ? location.state : "/");
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto mt-20 bg-[#343434] rounded-xl shadow-xl p-4">
      <h1 className="text-center text-5xl font-bold text-white">Login here</h1>
      <div className="card bg-base-300 bg-opacity-50 w-full max-w-[50%] mx-auto shrink-0 shadow-2xl mt-10">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Email Address:</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">Password:</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-black">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success font-bold text-xl">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
