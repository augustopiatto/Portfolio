import { WarningStorage } from "./contexts/WarningContext.tsx";
import { Content } from "./modules/content/Content.tsx";
import { Warning } from "./components/UIComponents/warning/Warning.tsx";
import { Footer } from "./modules/footer/Footer.tsx";
import { Header } from "./modules/header/Header.tsx";

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
