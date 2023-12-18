import Header from "./components/Header.tsx";
import Content from "./components/content/Content.tsx";
import Footer from "./components/Footer.tsx";
import { WarningStorage } from "./contexts/WarningContext.tsx";
import Warning from "./components/UIComponents/Warning.tsx";

function App() {
  return (
    <>
      <WarningStorage>
        <Header />
        <div className="mt-20 px-40 bg-background">
          <Warning />
          <Content />
        </div>
        <Footer />
      </WarningStorage>
    </>
  );
}

export default App;
