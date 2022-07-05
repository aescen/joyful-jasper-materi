import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./UserSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>UserView komponen</h1>
      {user.loading === true ? <h1>Loading</h1> : null}
      {user.error !== "" ? <h1>Error: {user.error}</h1> : null}
      {user.users.map((user, key) => (
        <div key={key}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserView;
