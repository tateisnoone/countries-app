import { lazy } from "react";

const LazyCardPageSectionTest = lazy(
    () => import("../components/card-list-test/test"),
);

const CardsPageListView = () => {
    return (
        <>
            <LazyCardPageSectionTest />
        </>
    );
};

export default CardsPageListView;
