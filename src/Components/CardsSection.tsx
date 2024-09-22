import "./CardsSection.css";
import usaFlag from "../assets/usaFlag.jpeg";
import georgiaFlag from "../assets/georgiaFlag.jpeg";

const countries = [
  {
    name: "USA",
    population: 331000000,
    capital: "Washington D.C",
    image: usaFlag,
  },
  {
    name: "Georgia",
    population: 3710000,
    capital: "Tbilisi",
    image: georgiaFlag,
  },
];
const CardsSection = () => {
  return (
    <div className="container cardSection">
      <div className="left">
        <h1>Countries Where Vought International Operates</h1>
      </div>
      <div className="right">
        {countries.map((country, index) => (
          <div className="card" key={index}>
            <img src={country.image} alt="{country.name} Flag" />
            <h1>{country.name}</h1>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
