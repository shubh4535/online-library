import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!title || !author || !category || !description || !rating) {
      alert("All fields are required!");
      return;
    }

    // Create new book object
    const newBook = {
      id: Date.now(), // unique ID
      title,
      author,
      category,
      description,
      rating: parseFloat(rating),
    };

    // Dispatch to Redux
    dispatch(addBook(newBook));

    // Navigate back to Browse Books
    navigate("/books");
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="number"
          step="0.1"
          placeholder="Rating (0-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;