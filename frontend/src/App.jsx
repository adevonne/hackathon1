import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import PageUser from "./pages/PageUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<PageUser />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
