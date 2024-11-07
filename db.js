import axios from "axios";
// const deleteAllCountries = async () => {
//     try {
//         const response = await axios.get("http://localhost:3000/countries");
//         const countries = response.data;

//         for (const country of countries) {
//             await axios.delete(`http://localhost:3000/countries/${country.id}`);
//             await new Promise((resolve) => setTimeout(resolve, 100)); // 100ms delay
//         }

//         console.log("All data deleted successfully.");
//     } catch (error) {
//         console.error("Error deleting data:", error.message);
//     }
// };

const postCountries = async () => {
    try {
        // deleteAllCountries();
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
