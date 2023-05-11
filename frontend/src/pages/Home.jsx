import SearchBar from "../components/SearchBar";
import CitiesCard from "../components/CitiesCard";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="search">
        <SearchBar />
      </div>
      <CitiesCard />
    </>
  );
}
