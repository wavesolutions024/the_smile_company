import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./comp/header/Header";
import About from "./pages/about/About";
import Footer from "./comp/footer/Footer";
import Contact from "./pages/contact/Contact";
import Male from "./pages/dr-page/Male";
import Female from "./pages/dr-page/Female";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Male />} path="/male-dr" />
          <Route element={<Female />} path="/female-dr" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
