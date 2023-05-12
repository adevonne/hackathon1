import { Link } from "react-router-dom";
import cities from "../data/allCities";
import "./CitiesCard.css";

function CitiesCard() {
  return (
    <section className="citycard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-5">
      {cities.map((city) => (
        <Link to="/hotels">
          <div key={`city-${city.id}`} className="card">
            <img src={city.image} alt={city.name} />
            <p>{city.name}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default CitiesCard;
