import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Users = () => {
  const userData = useContext(UserContext);
  console.log(userData);
  return (
    <div>
      <h1>UseContext</h1>
      {userData.name}
    </div>
  );
};

export default Users;
