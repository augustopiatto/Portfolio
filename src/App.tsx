import Header from "./components/Header.tsx";
import Content from "./components/content/Content.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <div className="px-40 bg-background">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
