import { Link } from "react-router-dom";
import cities from "../data/allCities";
import "./List.css";

function CitiesCard() {
  const getCity = (result) => {
    localStorage.setItem("latitude", result.geoCode.latitude);
    localStorage.setItem("longitude", result.geoCode.longitude);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center mt-10 max-w-[90%] m-auto">
      {cities.map((city) => (
        <Link
          to="/hotels"
          onClick={() => {
            getCity(city);
          }}
        >
          <div key={`city-${city.id}`} className="hotel_card">
            <img
              className="h-[80%] w-[100%] rounded-t-md"
              src={city.image}
              alt={city.name}
            />
            <p>{city.name}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CitiesCard;
