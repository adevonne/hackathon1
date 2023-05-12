import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "@components/Header";
import Home from "./pages/Home";
import HotelList from "./pages/HotelList";
import HotelDetails from "./pages/HotelDetails";

function App() {
  // const getToken = () => {
  //   fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: `grant_type=client_credentials&client_id=${
  //       import.meta.env.VITE_API_KEY
  //     }&client_secret=${import.meta.env.VITE_API_SECRET}`,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.access_token);
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
      </Routes>
    </div>
  );
}
export default App;
