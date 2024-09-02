import { useState, useEffect } from "react";

function File() {
  // Step 1: Define state to hold the post data and any error messages
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  // Step 2: Use useEffect to trigger the API call when the component mounts
  useEffect(() => {
    // Step 3: Make the API call using fetch
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        // Step 4: Check if the response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Step 5: Parse the response JSON
        return response.json();
      })

      .then((data) => {
        // console.log(data);
        // Step 6: Update the state with the fetched data
        setPost(data);
      })
      .catch((error) => {
        // Step 7: Handle any errors that occurred during the fetch
        setError(error.message);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Step 8: Render the component UI
  return (
    <div>
      <h1>Post Details</h1>
      {error && <p>Error: {error}</p>} {/* Display error if any */}
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p> // Display loading text while waiting for the data
      )}
    </div>
  );
}

export default File;
