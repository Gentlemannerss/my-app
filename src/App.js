import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';

// Import Components
import Navigation from "./components/Navigation/Navigation.js"
import Footer from "./components/Footer/Footer.js"

// Import Pages for Routes:
import Home from "./pages/Home/Home.js";
import Contact from "./pages/Contact/Contact.js";
import Products from "./pages/Products/Products.js";

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
