import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState({});
  const [dataGithub, setDataGithub] = useState({});
  // const [todos, setTodos] = useState(0);
  // const [changed, setChanged] = useState(0);

  // useEffect(() => {
  //   console.log("tes ada perubahan");
  //   setChanged(changed + 1);
  // }, [name, todos]);

  // useeffect call api
  let url = "https://api.github.com/users/thoriqnf";

  useEffect(() => {
    async function getAPI() {
      const result = await axios.get(url);
      console.log(result);
      // setName(result.data.name);
      setDataGithub(result.data);
    }

    getAPI();
  }, []);

  console.log(dataGithub);
  return (
    <div className="App">
      <h1>Use Effect</h1>
      {/* <h1>Nama github: {name}</h1> */}
      <h1>Bio: {dataGithub.bio}</h1>
      {/* <h1>Perubahan: {changed}</h1>
      <button onClick={() => setName(!name)}>Ubah nilai</button>
      <h1>Todos: {todos}</h1>
      <button onClick={() => setTodos(todos + 1)}>Ubah nilai todos</button> */}
    </div>
  );
}

export default App;
