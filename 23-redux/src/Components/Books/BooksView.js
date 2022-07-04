import { useSelector, useDispatch } from "react-redux";
import { borrow } from "./BooksSlice";

const BooksView = () => {
  const dispatch = useDispatch();

  // Mengambil dari store
  const totalBooksRedux = useSelector((state) => state.book.totalBooks);

  console.log("total", totalBooksRedux);

  return (
    <div>
      <h1>BooksView</h1>
      <h1>Total Books: {totalBooksRedux}</h1>

      <button onClick={() => dispatch(borrow())}>Borrow</button>
    </div>
  );
};

export default BooksView;
