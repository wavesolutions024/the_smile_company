import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./comp/header/Header";
import About from "./pages/about/About";
import Footer from "./comp/footer/Footer";
import Contact from "./pages/contact/Contact";
import Male from "./pages/dr-page/Male";
import Female from "./pages/dr-page/Female";
import Technology from "./pages/technology/Technology";
import BlogDetails from "./pages/blog-details/BlogDetails";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Technology />} path="/technology" />
          <Route element={<Services />} path="/services" />
          <Route element={<Male />} path="/male-dr" />
          <Route element={<Female />} path="/female-dr" />
          <Route element={<BlogDetails />} path="/blog-details" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
