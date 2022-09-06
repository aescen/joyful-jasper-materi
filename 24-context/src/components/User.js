import { UserContext } from "../context/UserContext";

const User = () => {
  return (
    <UserContext.Consumer>
      {(userContext) => {
        const { user } = userContext;
        const { userData } = userContext;
        console.log(userData);
        return (
          <div>
            <h1>User Context</h1>
            <h3>name: {user.name}</h3>
            <h3>name: {user.batch}</h3>
            {userData === []
              ? null
              : userData.map((item, key) => <h1 key={key}>{item.name}</h1>)}
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default User;
