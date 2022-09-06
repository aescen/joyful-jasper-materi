import "./App.css";
// import Users from "./components/Users";
import User from "./components/User";

import UserContextProvider from "./context/UserContext";
import GithubContextProvider from "./context/GithubContext";
import APIGithub from "./components/APIGithub";

function App() {
  return (
    <div className="App">
      <GithubContextProvider>
        <APIGithub />
      </GithubContextProvider>
      <UserContextProvider>
        <h1>React Context</h1>
        <User />
        {/* <Users /> */}
      </UserContextProvider>
    </div>
  );
}

export default App;
