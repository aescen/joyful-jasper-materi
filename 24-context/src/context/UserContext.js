import { useState, createContext, useEffect } from "react";
import axios from "axios";

// buat dulu setup context dengan createContext
export const UserContext = createContext();

// komponen provider untuk menyediakan si data context
const UserContextProvider = (props) => {
  const [user] = useState({
    name: "skilvul",
    batch: "Joyfull Jasper",
  });
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(result.data);
    };

    getData();
    console.log(userData);
  }, []);

  return (
    <UserContext.Provider value={{ user, userData }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
