import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Projects = () => {
  const { projectId } = useParams();
  return (
    <>
      <NavBar />
      This Is Projects Page!! <br />
      the project ID is :<br />
      <p>Project ID: {projectId}</p>
    </>
  );
};
export default Projects;
