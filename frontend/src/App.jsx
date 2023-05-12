// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";
import Maps from "./components/Maps";

function App() {
  // const getToken = () => {
  //   fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: `grant_type=client_credentials&client_id=VPke5kdYElBiGRP9L9kbneOCq8DD8l0Y&client_secret=JYuPhrlsP7p5pugO`,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       fetch(
  //         "https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=2.160873",
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${data.access_token}`,
  //           },
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((datas) => console.log(datas))
  //         .catch((err) => console.error(err));
  //     });
  // };

  // useEffect(() => {
  //   getToken();
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels " element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
      </Routes>
      <Maps />
    </div>
  );
}
export default App;
