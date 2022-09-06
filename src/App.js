import React from "react";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from "./Components/About";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;