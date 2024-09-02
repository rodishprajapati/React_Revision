import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useState } from "react";
// import UserInfo from "../Promise/Promise_all";
// import Promise from "../Promise/Promise_all";
import UserInfo from "../api/Promise/Promise_all";
import DynamicRequest from "../api/Dynamic_method/DynamciRequest";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // useSearchParams handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to /search with the search term as a query parameter
    navigate(`/search?id=${encodeURIComponent(searchTerm)}`);
  };

  const handleNavigate = () => {
    //state values is passed with url not visible to users
    navigate("/aboutus", { state: { message: "Hello from Home!" } });
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <NavBar />
        <h1>Home Page</h1>
        <button onClick={handleNavigate}>Go to Details with State</button>

        {/* useearchParams */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term"
          />
          <button type="submit">Search</button>
        </form>

        <div>hello</div>
        <br />
        <br />
        {/* <File /> */}
        <br />
        <br />
        <hr />
        {/* <Post /> */}
        <div>
          <UserInfo />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <DynamicRequest />
        </div>
      </div>
    </>
  );
};
export default Home;
