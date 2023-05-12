import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HotelDetails() {
  const [finalDatas, setFinalDatas] = useState([]);
  const { id } = useParams();

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
          `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=["${id}"]`,
          // `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=["MCLONGHM"]`,
          // &adults=1&checkInDate=2023-11-22&roomQuantity=1&bestRateOnly=true
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((datas) => {
            if (datas.data.length) {
              // console.log(datas.data[0].offers[0].id);
              fetch(
                `https://test.api.amadeus.com/v3/shopping/hotel-offers/${datas.data[0].offers[0].id}`,
                {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${data.access_token}`,
                  },
                }
              )
                .then((res) => res.json())
                .then((dataHotel) => {
                  setFinalDatas(dataHotel.data);
                });
            }
          })
          .catch((err) => console.error("2", err));
      })
      .catch((err) => console.error("1", err));
  };

  useEffect(() => {
    getToken();
  }, []);

  if (finalDatas.length === 0) {
    return <p>En cours de chargement</p>;
  }

  return <div className="mt-3">{finalDatas.type}</div>;
}
