import { Link } from "react-router-dom";
import footerLogo from "/logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-[#343434] text-base-content p-10">
      <aside>
        <img className="w-[100px] h-[100px]" src={footerLogo} alt="" />
        <p className="text-white font-medium text-lg">
          EquiSports Online Shop
          <br />
          Your one stop solution for Sports Gear!
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-white text-lg">Services</h6>
        <Link to={"/"}>
          <p className="link link-hover text-white text-lg">Home</p>
        </Link>
        <Link to={"/allequipments"}>
          <p className="link link-hover text-white text-lg">All Equipments</p>
        </Link>
        <Link to={"/addequipment"}>
          <p className="link link-hover text-white text-lg">Add Equipments</p>
        </Link>
        <Link to={"/myequipment"}>
          <p className="link link-hover text-white text-lg">My Equipments</p>
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title text-white text-lg">Company</h6>
        <a className="link link-hover text-white text-lg">About us</a>
        <a className="link link-hover text-white text-lg">Contact</a>
        <a className="link link-hover text-white text-lg">Jobs</a>
        <a className="link link-hover text-white text-lg">Press kit</a>
      </nav>
      <form>
        <h6 className="footer-title text-white text-lg">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
