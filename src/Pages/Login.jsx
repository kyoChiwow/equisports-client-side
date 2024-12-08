import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, setUser, setLoading, googleSignIn } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleSignIn()
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
        if (err.code === "auth/popup-closed-by-user") {
          return;
        }
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
      <div className="card bg-base-300 bg-opacity-50 w-full lg:max-w-[75%] xl:max-w-[50%] mx-auto shrink-0 shadow-2xl mt-10">
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
          <div className="form-control relative">
            <label className="label">
              <span className="font-semibold">Password:</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-4 bottom-11"
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-black">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-2">
            <button className="btn btn-success font-bold text-xl">Login</button>
          </div>
          <div className="flex flex-col mt-4">
            <button
              onClick={handleGoogleLogin}
              className="btn font-bold text-xl text-black"
            >
              <FcGoogle></FcGoogle> Login With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
