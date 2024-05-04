import "./Footer.css";
import n2 from "../assets/n2.jpeg";
import n3 from "../assets/n3.jpeg";
import fg from "../assets/fg.png";

function Footer() {
  return (
    <div className="footer">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="w-50 d-flex flex-column justify-content-center align-items-center">
          <img src={fg} className="fg" />
          <div>
            <img src={n2} className="ods-footer" />
            <img src={n3} className="ods-footer" />
          </div>
        </div>
        <div className="w-50 d-flex flex-column justify-content-center align-items-center">
          <p className="w-75 alunas">
            Desenvolvido por: Bárbara Emilly, Denise Cristina, Ivana Rodrigues,
            Kaylane Nicolly, Maristela Ishikawa, Rita de Cássia, Wanessa Alves
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
