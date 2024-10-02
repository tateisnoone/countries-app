import Dashboard from "@/layout/dashboard";
import "@/App.css";
import CardsListView from "./pages/home/views/list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutView from "./pages/about-us/views";
import NotFoundPage from "./pages/404";
import { Suspense } from "react";

//import GeorgiaFlag from "@/assets/georgiaFlag.jpeg";

// const countryGE = {
//   name: "Georgia",
//   population: 331000000,
//   capital: "Tbilisi",
//   img: GeorgiaFlag,
// }; //amas mere vuzam rames gviania da im just a girl

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>VOUGHT WATCHES YOU</div>}>
                  <CardsListView />
                </Suspense>
              }
            />
            <Route path="/about" element={<AboutView />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
App.displayName = "App Component";

export default App;
