import "./app.css"
import Anticipate from "./components/Anticipate";
import ExplainerSection from "./components/ExplainerSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App()
{
  return <div className="main-container">
    <Hero />
    <ExplainerSection />
    <Anticipate />
    <Footer />
  </div>;
}

export default App
