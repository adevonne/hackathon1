import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../pages/Home.css";

export default function Results({ results }) {
  // const { name, address.countryCode, geoCode.latitude, geoCode.longitude } = results;

  const getCity = (result) => {
    localStorage.setItem("latitude", result.geoCode.latitude);
    localStorage.setItem("longitude", result.geoCode.longitude);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {results.map((result) => (
        <Link
          to="/hotels"
          onClick={() => {
            getCity(result);
          }}
          key={result.geoCode.latitude}
        >
          <div className="card_result">
            <p>{result.name}</p>
            <p>{result.address.countryCode}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

Results.propTypes = {
  results: PropTypes.string.isRequired,
};
