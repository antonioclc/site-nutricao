import "./Secao1.css";
import logo from "../../public/logo-nutriacao.png";
import { SocialIcon } from "react-social-icons";

function Secao1() {
  return (
    <div className="sobre" id="sobre">
      <h1 className="titulo" data-aos="fade-up">
        Sobre nós
      </h1>
      <hr />
      <h2 className="subtitulo" data-aos="fade-right">
        Nutrição que transforma com dedicação{" "}
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="sobre-container">
          <img src={logo} />
          <div>
            <p className="font-sobre" data-aos="zoom-in">
              Somos a Nutri.Ação24, nosso objetivo é fazer da nutrição um ATO!!
              Nutrir é movimento, é ação! Estamos aqui para fazer da alimentação
              um ato natural, saudável, gostoso e com custo viável. Nosso ideal
              é ensina a boa alimentação desde a primeira infância.
            </p>
            <p className="font-sobre text-center fs-5" data-aos="zoom-in">
              Siga nosso Instagram{" "}
              <SocialIcon
                style={{ width: "30px", height: "30px" }}
                className="rede-social"
                fgColor="white"
                network="instagram"
                target="_blank"
                url="https://www.instagram.com/nutriacao24"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secao1;
