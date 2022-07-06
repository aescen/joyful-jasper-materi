import { useState, createContext } from "react";

// buat dulu setup context dengan createContext
export const UserContext = createContext();

// komponen provider untuk menyediakan si data context
const UserContextProvider = (props) => {
  const [user] = useState({
    name: "skilvul",
    batch: "Joyfull Jasper",
  });

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
