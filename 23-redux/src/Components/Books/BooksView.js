import { useSelector, useDispatch } from "react-redux";
import { borrow, plusAuthor } from "./BooksSlice";

const BooksView = () => {
  const dispatch = useDispatch();

  // Mengambil dari store
  const totalRedux = useSelector((state) => state.book);
  // const totalAuthor = useSelector((state) => state.book.totalAuthor);

  // console.log("total", totalBooksRedux);

  return (
    <div>
      <h1>BooksView</h1>
      <h1>Total Books: {totalRedux.totalBooks}</h1>
      <h1>Total Author: {totalRedux.totalAuthor}</h1>

      <button onClick={() => dispatch(borrow())}>Borrow</button>
      <button onClick={() => dispatch(plusAuthor())}>plus author</button>
    </div>
  );
};

export default BooksView;
