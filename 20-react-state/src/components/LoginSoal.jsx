import React, { useState } from "react";

const LoginSoal = () => {
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setDataUser({
      // spread operator
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleUsername = (event) => {
  //   // console.log(event.target.value);
  //   setUsername(event.target.value);
  // };

  // const handlePass = (event) => {
  //   setPassword(event.target.value);
  // };

  return (
    <div>
      <h1>LoginSoal</h1>
      <input
        type="text"
        placeholder="username"
        value={dataUser.username}
        onChange={handleChange}
        name="username"
      />
      <input
        type="password"
        placeholder="password"
        value={dataUser.password}
        onChange={handleChange}
        name="password"
      />
      <button onClick={() => console.log(dataUser.username, dataUser.password)}>
        login
      </button>

      <h1>{dataUser.username}</h1>
      <h1>{dataUser.password}</h1>
    </div>
  );
};

export default LoginSoal;
