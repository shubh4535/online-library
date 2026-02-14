import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  // Filter by category
  const filteredBooks = books.filter((book) => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <h2>Browse Books {category && `- ${category}`}</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;