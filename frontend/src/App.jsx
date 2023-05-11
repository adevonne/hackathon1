import Maps from "@components/maps";
import { useEffect } from "react";

function App() {
  const getToken = () => {
    fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=VPke5kdYElBiGRP9L9kbneOCq8DD8l0Y&client_secret=JYuPhrlsP7p5pugO`,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token);
        fetch(
          "https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=41.397158&longitude=2.160873",
          {
            method: "GET",
            headers: {
              // "Content-Type": "application/json",
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((datas) => console.log(datas))
          .catch((err) => console.error(err));
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return <Maps />;
}
export default App;
