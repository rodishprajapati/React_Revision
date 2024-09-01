import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";

const About = () => {
  const location = useLocation();
  // message sent in navigate state in accessed by location.state
  // message from the state is destructured
  const { message } = location.state || {};
  console.log(location);
  // console.log(location.state);
  // console.log(location.pathname);
  // console.log(location.state);

  return (
    <>
      <NavBar />
      This Is About Page!!
      <h1>Details Page</h1>
      <p>Received Message: {message}</p>
    </>
  );
};
export default About;
