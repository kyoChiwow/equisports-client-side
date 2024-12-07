import { Fade, Slide } from "react-awesome-reveal";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = e.target.itemname.value;
    const itemCategory = e.target.category.value;
    const itemPhoto = e.target.addphoto.value;
    const itemDescription = e.target.description.value;
    const itemCustomization = e.target.customize.value;
    const itemTime = parseInt(e.target.processtime.value);
    const itemPrice = parseInt(e.target.price.value);
    const itemRating = e.target.rating.value;
    const itemStock = parseInt(e.target.stock.value);
    const itemUserName = e.target.username.value;
    const itemUserEmail = e.target.useremail.value;

    const newProduct = {
      itemName,
      itemCategory,
      itemPhoto,
      itemDescription,
      itemCustomization,
      itemTime,
      itemPrice,
      itemRating,
      itemStock,
      itemUserEmail,
      itemUserName,
    };

    // Sending the data to Backend and Database
    fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then((data) => {
        Swal.fire({
            title: "Success!",
            text: "You have successfully created your account!",
            icon: "success",
            willClose: () => {
              form.reset();
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
  };

  return (
    <div>
      {/* Navbar Here */}
      <header>
        <NavBar></NavBar>
      </header>
      {/* Navbar Here */}

      {/* Add Equipment form here */}
      <main className="mt-10">
        <div>
          <Slide>
            <h1 className="text-4xl font-bold mb-4 text-center">
              Add Your Equipment
            </h1>
          </Slide>
          <Fade delay={1e3} cascade damping={1e-1}>
            <p className="text-center text-base font-medium">
              Please input the information asking below to add you product.
            </p>
          </Fade>
        </div>

        {/* Form Div */}
        <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto mt-20 bg-[#343434] rounded-xl shadow-xl p-4">
          <div className="card bg-base-300 bg-opacity-50 w-full lg:max-w-[75%] xl:max-w-[70%] mx-auto shrink-0 shadow-2xl">
            <form onSubmit={handleAddEquipment} className="card-body">
              {/* Form 1st part */}
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Item Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Item Name"
                    name="itemname"
                    className="input input-bordered"
                    required
                  />
                </div>
                <label className="form-control lg:w-[49%]">
                  <div className="label">
                    <span className="font-semibold">Category Name</span>
                  </div>
                  <select name="category" className="select select-bordered">
                    <option disabled selected>
                      Pick one
                    </option>
                    <option>Fitness & Training Equipment</option>
                    <option>Outdoor Sports Gear</option>
                    <option>Team Sports Equipment</option>
                    <option>Water Sports & Accessories</option>
                    <option>Racket Sports Gear</option>
                  </select>
                </label>
              </div>
              {/* Form 1st part */}

              {/* Form 2nd part */}
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Photo URL"
                    name="addphoto"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Product Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Product Description"
                    name="description"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* Form 2nd part */}

              {/* Form 3rd part */}
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Product Customization</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Customization Details"
                    name="customize"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Processing Time</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Processing Time (Hours)"
                    name="processtime"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* Form 3rd part */}

              {/* Form 4th part */}
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Product Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Product Price (Dollar)"
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Product Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Product Rating (0-5)"
                    name="rating"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* Form 4th part */}

              {/* Form 5th part */}
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">User Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email Here"
                    name="useremail"
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter User Name"
                    name="username"
                    defaultValue={user.displayName}
                    readOnly
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* Form 5th part */}

              {/* Form 6th part */}
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="form-control lg:w-[49%]">
                  <label className="label">
                    <span className="font-semibold">Available Stock</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Available Stock"
                    name="stock"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* Form 6th part */}
              <div className="form-control mt-6">
                <button className="btn btn-success">Add Product</button>
              </div>
            </form>
          </div>
        </div>
        {/* Form Div */}
      </main>
      {/* Add Equipment form here */}
    </div>
  );
};

export default AddEquipment;
