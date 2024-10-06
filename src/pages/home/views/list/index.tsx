import CardHeader from "../../components/card-list/Card-Header/card-header";
import CardContent from "../../components/card-list/Card-Content/card-content";
import CardFooter from "../../components/card-list/Card-Footer/card-footer";
import { lazy } from "react";
import { cardDetails } from "../../static/countries-data";

const LazyCardSection = lazy(
  () => import("../../components/card-list/card-section")
);

const LazyHero = lazy(() => import("../../components/herop"));

const CardsListView = () => {
  return (
    <>
      <LazyHero />
      <LazyCardSection>
        <CardHeader imgSrc={cardDetails[0].img} altText="USA Flag" />
        <CardContent
          heading={cardDetails[0].name}
          population={cardDetails[0].population}
          capital={cardDetails[0].capital}
        />
        <CardFooter id={cardDetails[0].id} />
        <CardHeader imgSrc={cardDetails[1].img} altText="Georgia Flag" />
        <CardContent
          heading={cardDetails[1].name}
          population={cardDetails[1].population}
          capital={cardDetails[1].capital}
        />
        <CardFooter id={cardDetails[1].id} />
      </LazyCardSection>
    </>
  );
};

export default CardsListView;
