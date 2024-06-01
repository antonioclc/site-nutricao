import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Sobre from "./components/Sobre";
import Secao1 from "./components/Secao1";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="app-container">
      <Header />
      <Intro />
      <Sobre />
      <Secao1 />
      <Footer />
    </div>
  );
}

export default App;
