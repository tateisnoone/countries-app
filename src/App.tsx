import Dashboard from "@/layout/dashboard";
import "@/App.css";
import CardsListView from "./pages/home/views/list";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutView from "./pages/about-us/views";
import ContactFormView from "./pages/contact/views";
import CardDetailsPageView from "./pages/cards/views/details";
import NotFoundPage from "./pages/404";
import { Suspense } from "react";
import CardsPageListView from "./pages/cards/views";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:lang" element={<Dashboard />}>
            <Route
              errorElement={<NotFoundPage />}
              path="home"
              element={
                <Suspense
                  fallback={<div style={{ color: "#fff" }}>Loading...</div>}
                >
                  <CardsListView />
                </Suspense>
              }
            />

            <Route path="about" element={<AboutView />} />
            <Route path="contact" element={<ContactFormView />} />
            <Route
              path="home/cards"
              element={
                <Suspense
                  fallback={
                    <div style={{ color: "#fff" }}>Loading Cards...</div>
                  }
                >
                  <CardsPageListView />
                </Suspense>
              }
            />
            <Route path="home/cards/:id" element={<CardDetailsPageView />} />
          </Route>
          <Route path="/" element={<Navigate to="/en/home" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
App.displayName = "App Component";

export default App;
