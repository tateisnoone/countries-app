import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import CardSection from "./Components/Card/card-section";
import "./App.css";
import CardHeader from "./Components/Card/Card-Header/card-header";
import CardContent from "./Components/Card/Card-Content/card-content";
import CardFooter from "./Components/Card/Card-Footer/card-footer";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <CardSection>
          <CardHeader />
          <CardContent />
          <CardFooter />
        </CardSection>
      </div>
    </>
  );
};
App.displayName = "App Component";

export default App;
