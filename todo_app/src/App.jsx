import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import SearchPage from "./Pages/searchPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}

          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects/:projectId" element={<Projects />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Link to="">Projects</Link> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
