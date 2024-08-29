import { Button, Input } from "antd";
import "./data.js";
import { users } from "./data.js";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
const Profile = () => {
  const [userProfile, setUserProfile] = useState(users);

  const deleteItem = (userId) => {
    const updatedUsers = userProfile.filter((user) => user.id !== userId);
    console.log(updatedUsers);

    setUserProfile(updatedUsers);
  };

  // search id

  return (
    <>
      {/* <Input
        type="text"
        placeholder="Enter id"
        onChange={(e) => {
          //   debugger;

          if (e?.target?.value) {
            setUserProfile(
              userProfile?.filter((user) =>
                user.name?.includes(e?.target?.value)
              )
            );
          } else {
            setUserProfile(users);
          }
        }}
      /> */}
      {/* filter data from input box */}
      <Input
        type="text"
        placeholder="Enter id"
        onChange={(e) => {
          const inputValue = e?.target?.value;
          const idNumber = Number(inputValue); // Convert to number
          if (idNumber) {
            if (!isNaN(idNumber)) {
              // Check if conversion was successful
              setUserProfile(
                userProfile.filter((user) => user.id === idNumber)
              );
            }
          } else {
            setUserProfile(users);
          }
        }}
      />
      {/* map datas from data.js  */}
      <div>
        {userProfile.map((user) => (
          <ul key={user.id} className="flex flex-row justify-between">
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>
            <Button onClick={() => deleteItem(user.id)}>
              <MdDelete />
            </Button>
          </ul>
        ))}
      </div>
      {/* Add Data */}
      <div></div>
    </>
  );
};
export default Profile;
