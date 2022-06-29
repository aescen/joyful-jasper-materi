import { useState } from "react";

const Login = () => {
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    // cara beginer ubah state
    setInputLogin({
      ...inputLogin,
      [e.target.name] : e.target.value
    })

    // cara senior ubah state
    // setInputLogin((prevState) => ({
    //   ...prevState,
    //   [e.target.name] : e.target.value
    // }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(inputLogin);
    // console.log(password)
    // alert(email + password);
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={inputLogin.email}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={inputLogin.password}
          onChange={handleInput}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
