import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  // Find the book by ID
  const book = books.find((b) => b.id === parseInt(id));

  // If book not found, redirect to 404
  if (!book) {
    return (
      <div>
        <h2>Book Not Found</h2>
        <button onClick={() => navigate("/books")}>Back to Browse</button>
      </div>
    );
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>

      <button onClick={() => navigate("/books")}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;