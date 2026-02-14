import { Link } from "react-router-dom";
import dummyBooks from "../data/dummyBooks";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

function Home() {
  return (
    <div>
      <h2>Welcome to the Online Library!</h2>

      <h3>Book Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      <h3>Popular Books</h3>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {dummyBooks.slice(0, 3).map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "200px",
            }}
          >
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;