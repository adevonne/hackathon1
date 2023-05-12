import { useEffect, useState } from "react";
import Maps from "../components/Maps";
import List from "../components/List";

export default function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [selectedRating, setSelectedRating] = useState();

  const getToken1 = () => {
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
          )}&radius=30&ratings=[${selectedRating}]`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((datas) => {
            // console.log("1", datas.data);
            setHotels(datas.data);
          })
          .catch((err) => console.error(err));
      });
  };

  const getToken2 = () => {
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
          )}&longitude=${localStorage.getItem("longitude")}&radius=30`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((datas) => {
            // console.log("2", datas.data);
            setHotels(datas.data);
          })
          .catch((err) => console.error(err));
      });
  };

  useEffect(() => {
    if (selectedRating !== undefined) {
      getToken1();
    } else {
      getToken2();
    }
  }, [selectedRating]);

  return (
    <>
      <Maps
        latitude={localStorage.getItem("latitude")}
        hotels={hotels}
        longitude={localStorage.getItem("longitude")}
      />

      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <div>
            Note
            <select
              value={selectedRating}
              onChange={(e) => {
                setSelectedRating(e.target.value);
                // if (e.target.value !== undefined) {
                //   getToken1();
                // } else {
                //   getToken2();
                // }
                // console.log(e.target.value);
              }}
              id="rating-select"
            >
              <option value="">---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </label>
      </form>

      <List hotels={hotels} />
    </>
  );
}
