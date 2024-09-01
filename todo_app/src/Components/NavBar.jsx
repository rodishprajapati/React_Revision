import { Link } from "react-router-dom";
// import Home from "../Pages/Home";

const NavBar = () => {
  return (
    <>
      <nav
        className="flex flex-row justify-around 
      bg-green-500 h-[5vh] align-middle items-center 
      text-xl"
      >
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        {/* <Link to="/projects">Projects</Link> */}
        <Link to="/projects/5647">Projects</Link>
      </nav>
    </>
  );
};
export default NavBar;
