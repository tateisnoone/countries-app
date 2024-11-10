import axios from "axios";
import fs from "fs";
const deleteAllCountries = async () => {
    try {
        if (fs.existsSync("database.json")) {
            fs.writeFileSync("database.json", JSON.stringify([]));
            console.log("All countries deleted");
        } else {
            console.log("File does not exist.");
        }
    } catch (error) {
        console.log("Error deleting countries:", error);
    }
};
const postCountries = async () => {
    try {
        await deleteAllCountries();
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

        fs.writeFileSync(
            "database.json",
            JSON.stringify({ countries: countriesData }, null, 2),
        );
        console.log("Countries added successfully");
    } catch (error) {
        console.log("Error:", error);
    }
};

postCountries();
