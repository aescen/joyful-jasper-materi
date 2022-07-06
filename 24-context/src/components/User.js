import { UserContext } from "../context/UserContext";

const User = () => {
  return (
    <UserContext.Consumer>
      {(userContext) => {
        const user = userContext;
        console.log(user);
        return (
          <div>
            <h1>User Context</h1>
            <h3>name: {user.name}</h3>
            <h3>name: {user.batch}</h3>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default User;
