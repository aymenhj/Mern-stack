import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Views/Home";
import Create from "./Components/Header";
import EditBook from "./Views/EditBook";
import OneBook from "./Views/OneBook";
function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/books/:id/edit" element={<EditBook />} />
            <Route path="/books/:id/details" element={<OneBook />} />
          </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;