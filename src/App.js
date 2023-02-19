import "./App.css";
import Navbar from "./Navbar.js";
import Home from "./Home";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Aphma from "./Aphma";
import Product from "./Product";
import ContactUs from "./ContactUs";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/aphma" element={<Aphma />} />

        <Route path="/product" exact element={<Product />} />

        <Route path="/ContactUs" exact element={<ContactUs />} />
        
      </Routes>

      <Footer className="this" />
    </>
  );
}

export default App;
