import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { creatingWithEmail, setUser, updateUser, setLoading, googleSignIn } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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
            navigate("/");
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

  const handleRegister = (e) => {
    e.preventDefault();

    // Getting the info here
    const username = e.target.username.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Sending data to server
    const newUser = { username, email, photo };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    // Sending data to server

    // Checking the password before executing
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password should contain one Uppercase, Lowercase and atleast 6 characters",
        icon: "error",
      });
      return;
    }

    // Calling the Context for creating here
    creatingWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUser({
          displayName: username,
          photoURL: photo,
        });
        Swal.fire({
          title: "Success!",
          text: "You have successfully created your account!",
          icon: "success",
          willClose: () => {
            navigate("/");
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
      <h1 className="text-center text-5xl font-bold text-white">
        Create an account
      </h1>
      <div className="card bg-base-300 bg-opacity-50 w-full lg:max-w-[75%] xl:max-w-[50%] mx-auto shrink-0 shadow-2xl mt-10">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="font-semibold">User Name:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Username"
              name="username"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="font-semibold">Photo URL:</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Photo URL"
              name="photo"
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
              className="btn btn-xs absolute right-4 bottom-3"
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </button>
          </div>
          <div className="flex flex-col mt-6">
            <button
              onClick={handleGoogleLogin}
              className="btn font-bold text-xl text-black"
            >
              <FcGoogle></FcGoogle> Login With Google
            </button>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-info font-bold text-xl">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
