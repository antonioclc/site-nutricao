import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Sobre from "./components/Sobre";
import Secao1 from "./components/Secao1";
import Footer from "./components/Footer";

function App() {
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
