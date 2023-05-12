// import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CitiesCard from "../components/CitiesCard";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="search">
        <SearchBar />
        {/* <Link to="/user">
          <img
            className="flex w-[80px] rounded-full md:w-[160px]"
            src="../src/assets/moi.jpg"
            alt=""
          />
        </Link> */}
      </div>
      <CitiesCard />
    </>
  );
}
