import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const GithubContext = createContext();

const GithubContextProvider = (props) => {
  const [githubData, setGithubData] = useState({});

  // useEffect
  useEffect(() => {
    const getDataGithub = async () => {
      const result = await axios.get("https://api.github.com/users/thoriqnf");
      setGithubData(result.data);
    };
    getDataGithub();
  }, []);

  // context
  return (
    <GithubContext.Provider value={{ githubData }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContextProvider;
