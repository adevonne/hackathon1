import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Results({ results }) {
  // const { name, address.countryCode, geoCode.latitude, geoCode.longitude } = results;

  const getCity = (result) => {
    localStorage.setItem("latitude", result.geoCode.latitude);
    localStorage.setItem("longitude", result.geoCode.longitude);
  };

  return (
    <section className="result">
      {results.map((result) => (
        <Link
          to="/hotels"
          onClick={() => {
            getCity(result);
          }}
          key={result.geoCode.latitude}
        >
          <div>
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
