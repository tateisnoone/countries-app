import USAFlag from "@/assets/usaFlag.jpeg";
import { lazy } from "react";

const countryUSA = {
  name: "USA",
  population: 331000000,
  capital: "Washington D.C",
  img: USAFlag,
};

const LazyCardContent = lazy(
  () => import("../../components/Card/Card-Content/card-content")
);

const LazyCardFooter = lazy(
  () => import("../../components/Card/Card-Footer/card-footer")
);

const LazyCardHeader = lazy(
  () => import("../../components/Card/Card-Header/card-header")
);
const LazyCardSection = lazy(
  () => import("../../components/Card/card-section")
);

const LazyHero = lazy(() => import("../../components/Hero"));

const CardsListView = () => {
  return (
    <>
      <LazyHero />
      <LazyCardSection>
        <LazyCardHeader imgSrc={countryUSA.img} altText="USA Flag" />
        <LazyCardContent
          heading={countryUSA.name}
          population={countryUSA.population}
          capital={countryUSA.capital}
        />
        <LazyCardFooter />
      </LazyCardSection>
    </>
  );
};

export default CardsListView;
