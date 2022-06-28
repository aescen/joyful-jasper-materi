import "./App.css";
import HelloWorld from "./components/HelloWorld.jsx";
import Button from "./components/Button";

// import catImage from "./cat.png";

const App = () => {
  // tempat mendeklarasikan JS sebelum return
  let tes = "tess";
  let num = 1 + 1000;

  // external handle event
  const handleClick = () => {
    console.log("tes");
  };

  const isLogin = false;

  // const data = [
  //   {
  //     murid: "dila",
  //   },
  //   {
  //     murid: "auzan",
  //   },
  // ];

  const data = ["dila", "auzan"];

  return (
    // JSX
    <div className="App">
      <header className="App-header">
        {data.map((item, key) => (
          <h1 key={key}>{item}</h1>
        ))}
        <Button />
        <HelloWorld />
        <p>Hello World Joyfull Jasper!</p>
        <p>{tes.toUpperCase()}</p>
        <p>{num}</p>

        {/* image from url */}
        {/* <img
          src="https://th.bing.com/th/id/OIP.krXgDcts2hh2AT61oGCDrgHaE8?w=269&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt="cat"
        /> */}

        {/* image from local */}
        {/* <img src={catImage} alt="cat" /> */}

        {/* external handle event*/}
        <button onClick={handleClick}>Tes button</button>
        <button onClick={() => console.log("tes inline")}>
          Tes button inline
        </button>

        {/* checkbox event */}
        <input type="checkbox" onChange={() => console.log("checkbox")} />

        {/* input form */}
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
        />

        {/* satu satunya cara untuk conditional ternary operator */}
        {isLogin ? <p>sudah login</p> : <p>belum login</p>}

        {/* maping menampilkan array of object */}
        {data.map((item, index) => (
          <h1 key={index}>{item.murid}</h1>
        ))}
      </header>
    </div>
  );
};

export default App;
