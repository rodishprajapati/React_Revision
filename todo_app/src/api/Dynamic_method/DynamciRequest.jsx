import axios from "axios";
import { useState } from "react";

const DynamicRequest = () => {
  // State to manage the URL, method type, and response
  const [url, setUrl] = useState("http://bit.ly/2mTM3nY");
  const [method, setMethod] = useState("get");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle request
  const handleRequest = () => {
    axios({
      method: method,
      url: url,
      responseType: "stream", // Example of setting responseType
    })
      .then((response) => {
        // Log the response data to the console and update state
        console.log(response);
        setResponse(response.data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        // Log the error and update state
        console.error(error);
        setError(error.message);
        setResponse(null); // Clear previous responses
      });
  };

  return (
    <div>
      <h1>Dynamic Axios Request</h1>
      <div>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
        </label>
      </div>
      <button onClick={handleRequest}>Send Request</button>
      {response && (
        <div>
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default DynamicRequest;
