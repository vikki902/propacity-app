import "./App.css";
import Amenties from "./components/Amenties";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar";
import Book from "./components/Book";
import Amenties2 from "./components/Amenties2";




function App() {
  return (
    <div>
     

         
     <Navbar/>
     <SearchBar/>
     <Amenties/>
     <Contact/>
     <Footer/>

     <Register/>
     <Book/>


    </div>
  );
}

export default App;
