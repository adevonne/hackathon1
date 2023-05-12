import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HotelDetails() {
  const [setFinalDatas] = useState()[1];
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
          `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=[${id}]`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((datas) => {
            // console.log(datas);
            fetch(
              `https://test.api.amadeus.com/v3/shopping/hotel-offers/${datas.data.offers[0].id}`,
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
                // console.log(finalData);
              });
          })
          .catch((err) => console.error(err));
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div className="mt-3">test</div>;
}
