import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import CardsSection from "./Components/Cards/cards-section";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <CardsSection />
      </div>
    </>
  );
};
App.displayName = "App Component";

export default App;
