import Navbar from "./components/Navbar.jsx";
import Catalog from "./Views/Catalog.jsx"
import AddBook from "./Views/AddBook.jsx"
import BookDetails from "./Views/BookDetails.jsx"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </>
  );
}