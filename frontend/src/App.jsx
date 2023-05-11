import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels " element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
      </Routes>
    </div>
  );
}

export default App;
