import { useSelector, useDispatch } from "react-redux";
import { decrementCake, restockCake } from "./CakeSlice";

const CakeView = () => {
  const dispatch = useDispatch();
  const cakeRedux = useSelector((state) => state.cake.totalCakes);
  console.log(cakeRedux);
  return (
    <div>
      <h1>CakeView</h1>
      <h1>Total cakes {cakeRedux}</h1>
      <button onClick={() => dispatch(decrementCake())}>decrement cakes</button>
      <button onClick={() => dispatch(restockCake())}>restock cakes</button>
    </div>
  );
};

export default CakeView;
