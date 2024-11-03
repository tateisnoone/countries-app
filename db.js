import axios from "axios";

axios
    .get("https://restcountries.com/v3.1/all")
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
