import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import hotelsimg from "../data/hotelsimg";

export default function Maps({ latitude, longitude, hotels }) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      {hotels.map((hotel) => (
        <Marker position={[hotel.geoCode.latitude, hotel.geoCode.longitude]}>
          <Popup>
            <Link to={`/hotels/${hotel.hotelId}`}>
              <h2>{hotel.name}</h2>
              <img src={hotelsimg[0].img} alt="hotel" />
              <p>
                {hotel.distance.value}
                {hotel.distance.unit}
              </p>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

Maps.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  hotels: PropTypes.string.isRequired,
};
