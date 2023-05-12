import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import hotelsimg from "../data/hotelsimg";
import "./List.css";

export default function List({ hotels }) {
  const randomImg = () => {
    return hotelsimg[Math.floor(Math.random() * 10)].img;
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center mt-10 max-w-[90%] m-auto mb-12">
      {hotels.map((hotel) => (
        <div className="hotel_card">
          <Link to={`/hotels/${hotel.hotelId}`}>
            <img
              src={randomImg()}
              alt="hotel"
              className="h-[80%] w-[100%] rounded-t-md"
            />
            <h2>{hotel.name}</h2>
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
