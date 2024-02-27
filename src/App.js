import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';

// Import Components
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"

// Import Pages for Routes:
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
        <Navigation/>
          <main className="mainContainer">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
          </main>
        <Footer/>
    </div>
  );
}

export default App;
