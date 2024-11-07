import axios from "axios";

// axios.get("http://localhost:3000/countries").then((res) => {
//     console.log(res.data);
//     axios.delete("http://localhost:3000/countries");
// });
const postCountries = async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countriesData = response.data.map((country) => ({
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
    } catch (error) {
        console.log("error:", error);
    }
};

postCountries();
