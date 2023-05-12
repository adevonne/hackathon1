import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import hotelsimg from "../data/hotelsimg";

export default function List({ hotels }) {
  const randomImg = () => {
    return hotelsimg[Math.floor(Math.random() * 10)].img;
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center">
      {hotels.map((hotel) => (
        <div className="border-2 border-gray-950">
          <Link to={`/hotels/${hotel.hotelId}`}>
            <h2>{hotel.name}</h2>
            <img src={randomImg()} alt="hotel" className="" />
            <p>
              {hotel.distance.value}
              {hotel.distance.unit}
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
}

List.propTypes = {
  hotels: PropTypes.string.isRequired,
};
