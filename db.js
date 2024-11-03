import axios from "axios";

axios.get("https://restcountries.com/v3.1/all").then((res) => {
    const countriesData = res.data.map((country) => ({
        id: country.cca2,
        name: country.name.common,
        nameGe: country.name.official,
        population: country.population,
        capital: country.capital ? country.capital[0] : "N/A",
        capitalGe: country.capital ? country.capital[0] : "N/A",
        image: country.flags.svg || "",
        vote: 0,
    }));
    countriesData.forEach((country) => {
        axios.post("http://localhost:3000/countries", country);
    });
});
