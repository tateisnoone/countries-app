import { lazy } from "react";

const LazyCardPageSection = lazy(
    () => import("../components/card-list/page-card-list"),
);

const CardsPageListView = () => {
    return (
        <>
            <LazyCardPageSection />
        </>
    );
};

export default CardsPageListView;
