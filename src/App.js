import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/About";
import AddBook from "./components/AddBook";
import BookDetail from "./components/Book/BookDetail";
import Books from "./components/Book/Books";
import Header from './components/Header';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
           <BrowserRouter>
      <Header/>
    <Routes>
     
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/add" element={<AddBook/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/books/:id" element={<BookDetail/>} />
        
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

//1:33:05
