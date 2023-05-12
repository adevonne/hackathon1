import React, { useState } from "react";
import Results from "./Results";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const getToken = () => {
    fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=client_credentials&client_id=${
        import.meta.env.VITE_API_KEY
      }&client_secret=${import.meta.env.VITE_API_SECRET}`,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.access_token);
        fetch(
          `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${searchQuery}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.access_token}`,
            },
          }
        )
          .then((res) => res.json())
          .then((datas) => setResults(datas.data))
          .catch((err) => console.error(err));
      });
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    getToken();
    // console.log(results);
    setSearchQuery("");
  };

  if (results.length < 0) {
    return <p>Chargement en cours</p>;
  }

  return (
    <label
      htmlFor=""
      className="header-search text-center mt-10 mx-auto w-10/12"
    >
      <div className="search-container ">
        <input
          placeholder="Recherche..."
          type="text"
          className="inputSearch border-2 border-neutral-950 rounded-md w-80 mb-5 h-7"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          id="myButton"
          className="buttonSearch border-2 border-black hover:bg-black/80 hover:text-white/80 rounded-md ml-5 px-3 h-7"
          type="button"
          onClick={handleSearch}
        >
          Rechercher
        </button>
        <Results results={results} />
      </div>
    </label>
  );
}
