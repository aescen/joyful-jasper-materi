import { GithubContext } from "../context/GithubContext";
import { useContext } from "react";

const APIGithub = () => {
  const { githubData } = useContext(GithubContext);
  console.log(githubData);
  return (
    <div>
      <h1>APIGithub</h1>
      <h3>name: {githubData.name}</h3>
      <img src={githubData.avatar_url} alt={githubData.name} />
    </div>
  );
};

export default APIGithub;
