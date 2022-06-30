import Todos from "./components/Todos";
// import { useState } from "react";
// import CounterSoal from "./components/CounterSoal";
// import LoginSoal from "./components/LoginSoal";
// import CartItem from "./components/CartItem";
// import Counter from "./components/Counter";
// import Login from "./components/Login";

function App() {
  // state
  // const [nama, setNama] = useState("Auzan");
  // const [products, setProducts] = useState([
  //   "Apel",
  //   "Jeruk",
  //   "Rambutan",
  //   "Pisang",
  //   "Anggur",
  // ]);
  // const [obj, setObj] = useState({ name: "skilvul" });
  // setNama("Alpha")

  // variabel biasa
  // let name = "Auzan"
  // name = "Alpha"

  // onclick event external
  // const handleObj = () => {
  //   setObj({ name: "impact byte" });
  // };

  return (
    <div>
      {/* <h1>Todos</h1> */}
      <Todos />
      {/* <CounterSoal />
      <LoginSoal /> */}
      {/* onclick external */}
      {/* <h1 onClick={handleObj}>{obj.name}</h1> */}

      {/* onclick inline */}
      {/* <h1 onClick={() => setNama("Alpha")}>{nama}</h1> */}

      {/* <Login />

      {products.map((item, index) => (
        <CartItem key={index} product={item} />
      ))} */}

      {/* <CartItem product="apel" />
      <CartItem product="jeruk" />
      <CartItem product="rambutan" />
      <CartItem product="anggur" />
      <CartItem product="pisang" />
      <CartItem product="melon" />
      <CartItem product="semangka" /> */}

      {/* CartItem("apel") */}

      {/* <Counter /> */}
    </div>
  );
}

export default App;
