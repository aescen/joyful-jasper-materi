import "./App.css";
import Users from "./components/Users";
import User from "./components/User";

import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <h1>React Context</h1>
        <User />
        <Users />
      </UserContextProvider>
    </div>
  );
}

export default App;
