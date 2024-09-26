import Dashboard from "@/layout/dashboard";
import { Hero } from "#/Hero";
import CardSection from "#/Card/card-section";
import "@/App.css";
import CardHeader from "#/Card/Card-Header/card-header";
import CardContent from "#/Card/Card-Content/card-content";
import CardFooter from "#/Card/Card-Footer/card-footer";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Dashboard>
          <Hero />
          <CardSection>
            <CardHeader />
            <CardContent />
            <CardFooter />
          </CardSection>
        </Dashboard>
      </div>
    </>
  );
};
App.displayName = "App Component";

export default App;
