import axios from "axios";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [account, setAccount] = useState(null);
  const [permissions, setPermission] = useState(null);

  const getUserAccount = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users/1");
  };
  const getUserPermission = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts?userId=1");
  };
  //   debugger;
  useEffect(() => {
    Promise.all([getUserAccount(), getUserPermission()])
      .then(function ([acct, perm]) {
        setAccount(acct.data);
        // console.log(acct.data);
        setPermission(perm.data);
      })
      .catch((error) => {
        // Update state with error message
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div>
        {account ? (
          <div>
            <h2>Account Details</h2>
            <p>Name: {account.name}</p>
            <p>Email: {account.email}</p>
          </div>
        ) : (
          <p>Loading account details...</p>
        )}
        {permissions ? (
          <div>
            <hr />
            <h2>Permissions</h2>
            <ul>
              {permissions.map((permission) => (
                <li key={permission.id}>{permission.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading permissions...</p>
        )}
      </div>

      {/* {error && <p>Error: {error}</p>} */}
      {/* {account ? (
        <div>
          <h2>Account Details</h2>
          <p>Name: {account.name}</p>
          <p>Email: {account.email}</p>
        </div>
      ) : (
        <p>loading account details</p>
      )} */}
      {/* {permissions && (
        <div>
          <hr />
          <h2>Permissions</h2>
          <ul>
            {permissions.map((permission) => (
              <li key={permission.id}>{permission.title}</li>
            ))}
          </ul>
        </div>
      )} */}
    </>
  );
};
export default UserInfo;
