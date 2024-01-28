import Header from "./components/header/index.tsx";
import { WarningStorage } from "./contexts/WarningContext.tsx";
import { Content } from "./modules/content/index.tsx";
import { Warning } from "./components/UIComponents/warning/index.tsx";
import Footer from "./components/footer/index.tsx";

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
