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
        <div className="mt-20 px-5 mx-auto medium:px-0 max-w-[1200px]">
          <Warning />
          <Content />
        </div>
        <Footer />
      </WarningStorage>
    </>
  );
}

export default App;
