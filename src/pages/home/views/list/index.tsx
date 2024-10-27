import { lazy } from "react";
const LazyCardSection = lazy(
    () => import("../../components/card-list/card-section"),
);

const LazyHero = lazy(() => import("../../components/hero"));

const CardsListView = () => {
    return (
        <>
            <LazyHero />
            <LazyCardSection />
        </>
    );
};

export default CardsListView;
