const Button = () => {
  return (
    // JSX harus dalam 1 buah parent
    <>
      <button onClick={() => console.log("tes")}>Button Submit</button>
    </>
  );
};

export default Button;
