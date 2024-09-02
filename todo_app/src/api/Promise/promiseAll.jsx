import { useState, useEffect } from "react";
import axios from "axios";

function UserAccount() {
  // Step 1: Define state to hold the account and permissions data, and any error messages
  const [account, setAccount] = useState(null);
  const [permissions, setPermissions] = useState(null);
  const [error, setError] = useState(null);

  // Step 2: Function to simulate fetching user account details
  function getUserAccount() {
    return axios.get("https://jsonplaceholder.typicode.com/users/1"); // Replace with your actual API endpoint
  }

  // Step 3: Function to simulate fetching user permissions
  function getUserPermissions() {
    return axios.get("https://jsonplaceholder.typicode.com/posts?userId=1"); // Replace with your actual API endpoint
  }

  // Step 4: Use useEffect to trigger the API calls when the component mounts
  useEffect(() => {
    // Step 5: Use Promise.all to wait for both API calls to complete
    Promise.all([getUserAccount(), getUserPermissions()])
      .then(function ([acct, perm]) {
        // Step 6: Update the state with the fetched data
        setAccount(acct.data);
        setPermissions(perm.data);
      })
      .catch(function (error) {
        // Step 7: Handle any errors that occurred during the fetches
        setError(error.message);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Step 8: Render the component UI
  return (
    <div>
      <h1>User Account Information</h1>
      {error && <p>Error: {error}</p>} {/* Display error if any */}
      {account && (
        <div>
          <h2>Account Details</h2>
          <p>Name: {account.name}</p>
          <p>Email: {account.email}</p>
        </div>
      )}
      {permissions && (
        <div>
          <hr />
          <h2>Permissions</h2>
          <ul>
            {permissions.map((permission) => (
              <li key={permission.id}>{permission.title}</li>
            ))}
          </ul>
        </div>
      )}
      {!account && !error && <p>Loading...</p>}{" "}
      {/* Display loading text while waiting for the data */}
    </div>
  );
}

export default UserAccount;
