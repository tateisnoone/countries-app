import Dashboard from "@/layout/dashboard";
import { Hero } from "#/Hero";
import CardSection from "#/Card/card-section";
import "@/App.css";
import CardHeader from "#/Card/Card-Header/card-header";
import CardContent from "#/Card/Card-Content/card-content";
import CardFooter from "#/Card/Card-Footer/card-footer";
import USAFlag from "@/assets/usaFlag.jpeg";
//import GeorgiaFlag from "@/assets/georgiaFlag.jpeg";
const countryUSA = {
  name: "USA",
  population: 331000000,
  capital: "Washington D.C",
  img: USAFlag,
};
// const countryGE = {
//   name: "Georgia",
//   population: 331000000,
//   capital: "Tbilisi",
//   img: GeorgiaFlag,
// }; //amas mere vuzam rames gviania da im just a girl

const App: React.FC = () => {
  return (
    <>
      <div>
        <Dashboard>
          <Hero />
          <CardSection>
            <CardHeader imgSrc={countryUSA.img} altText="USA Flag" />
            <CardContent
              heading={countryUSA.name}
              population={countryUSA.population}
              capital={countryUSA.capital}
            />
            <CardFooter />
          </CardSection>
        </Dashboard>
      </div>
    </>
  );
};
App.displayName = "App Component";

export default App;
