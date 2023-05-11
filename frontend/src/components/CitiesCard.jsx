import cities from "../data/allCities";
import "./CitiesCard.css";

function CitiesCard() {
  return (
    <section className="citycard">
      {cities.map((city) => (
        <div key={`city-${city.id}`} className="card">
          <img src={city.image} alt={city.name} />
          <p>{city.name}</p>
        </div>
      ))}
    </section>
  );
}

export default CitiesCard;
