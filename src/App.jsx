import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Sobre from "./components/Sobre";
import Secao1 from "./components/Secao1";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Intro />
      <Sobre />
      <Secao1 />

      <br />
      <div></div>
      <div>
        SOLUÇÕES PARA UMA BOA ALIMENTAÇÃO: • Lanches (Wanessa) • Férias
        (Barbara) ARQUIVO WORD IVANA Festa infantil Salgados • Pão de queijo. •
        Coxinha de frango com massa de batata. • Sanduíche natural. • Pipoca.
        Doces • Espetinho de frutas: Banana, Morango, Maçã, Kiwi, Uva, Manga. •
        Brigadeiro de banana com cacau. • Picolé de frutas natural: Manga, Coco,
        Maracujá, Goiaba. • Cookies de aveia com gotas de chocolate. Bebidas •
        Água de coco. • Suco natural de frutas.
      </div>
    </div>
  );
}

export default App;
