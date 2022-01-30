const Guidebook = ({ countryInfo }) => {
  if (countryInfo !== []) {
    return (
      <section className="Guidebook">
        <p>Testing</p>
        {/* <h2>
          Facts about{" "}
          {countryInfo !== [] ? countryInfo.name.common : "Your Country"}
        </h2>
        <p>
          {countryInfo !== [] ? countryInfo.name.common : "Your Country"} is a
          country in
          {countryInfo !== [] ? countryInfo.region : "a region"}.
        </p> */}
      </section>
    );
  }
};

export default Guidebook;
