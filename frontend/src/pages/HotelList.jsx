import Maps from "@components/Maps";
import List from "@components/List";
import { useEffect, useState } from "react";

export default function HotelList() {
  const [hotels, setHotels] = useState([]);

  const getToken = () => {
    fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${
        import.meta.env.VITE_API_KEY
      }&client_secret=${import.meta.env.VITE_API_SECRET}`,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.access_token);
        fetch(
          `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=${localStorage.getItem(
            "latitude"
          )}&longitude=${localStorage.getItem(
            "longitude"
          )}&radius=30&ratings=[4,5]`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((datas) => setHotels(datas.data))
          .catch((err) => console.error(err));
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <Maps
        latitude={localStorage.getItem("latitude")}
        hotels={hotels}
        longitude={localStorage.getItem("longitude")}
      />
      <List hotels={hotels} />
    </>
  );
}
