import { Warning } from "./components/UIComponents/index.tsx";
import { WarningStorage } from "./contexts/WarningContext.tsx";
import { Content } from "./modules/content/Content.tsx";
import { Footer, Header } from "./modules/index.tsx";

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
