// import axios from "axios";
import React, { useState, useEffect } from "react";
import Guidebook from "./Guidebook";

// https://restcountries.com/v3.1/name/{name}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countryInfo, setCountryInfo] = useState();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchQuery}`
    );
    const dataArray = await res.json();
    const data = await dataArray[0];
    setCountryInfo(data);
    console.log(countryInfo);
    console.log(countryInfo.name.common);
  };

  useEffect(() => {
    console.log(searchQuery);
  });

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="entry your country here"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <Guidebook countryInfo={countryInfo} />
    </section>
  );
};

export default Search;
