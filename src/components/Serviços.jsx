import "./Servicos.css";
import { useState } from "react";
import energia from "../assets/energia.png";
import industria from "../assets/industria.png";
import caldeiraria from "../assets/caldeiraria.png";
import pavimentacao from "../assets/pavimentacao.png";
import estrutura from "../assets/estrutura.png";
import obra from "../assets/obra.png";
import locacao from "../assets/locacao.png";
import montagem from "../assets/montagem.png";
import maquina from "../assets/maquina.png";
import { MdPlaylistAddCircle } from "react-icons/md";
import { Modal, Button } from "rsuite";

// d-md-none APARECE DE MD PRA TRÁS
// d-lg-block d-none APARECE DE LG PRA FRENTE

function Servicos() {
  const [modal, setModal] = useState(false);
  const [servico, setServico] = useState({
    titulo: "",
    imagem: "",
    topicos: [],
  });

  return (
    <div id="servicos" className="servicos d-flex flex-column">
      <h1 className="titulo" data-aos="fade-up">
        Alto desempenho em cada projeto
      </h1>
      <hr />
      <h2 className="subtitulo font-roboto" data-aos="fade-right">
        Nossos serviços
      </h2>
      <div className="servicos-container">
        <div className="servico-container" data-aos="zoom-in">
          <img src={energia} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Energia</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Energia",
                  imagem: energia,
                  topicos: [
                    "Instalações elétricas de alta complexidade;",
                    "Substituição de cabeamentos elétricos, tomadas, iluminação interior e exterior de sua loja, comércio ou escritório;",
                    "Serviços em baixa e média tensão;",
                    "Montagem de subestações;",
                    "Montagem de quadros elétricos;",
                    "Montagem de transformadores e caixas de controle;",
                    "Fornecimento de peças e materiais;",
                    "Execução de projetos elétricos prediais;",
                    "Obras em baixa tensão seguindo as normas NBR 5410 e NBR 5444;",
                    "Elaboração de projetos elétricos.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={industria} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Indústria</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Indústria",
                  imagem: industria,
                  topicos: [
                    "Montagem e desmontagem de máquinas;",
                    "Contrato de manutenção periódica;",
                    "Limpeza e lubrificação;",
                    "Substituição de peças e componentes;",
                    "Manutenção Preventiva e Corretiva de Equipamentos;",
                    "Instalação, manutenção e higienização de ar condicionado. Garantia de maior refrigeração e vida útil do seu equipamento, além de eliminar impurezas e economizar energia;",
                    "Alvenaria com reboco e cimentados, pintura para áreas internas e externas, fachadas e telhados, além de revestimentos como aplicação de PVA, carpetes, entre outros.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={caldeiraria} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Caldeiraria</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Caldeiraria",
                  imagem: caldeiraria,
                  topicos: [
                    "Fabricação (corte, montagem, solda TIG/MIG/elétrica e acabamento) de estruturas metálicas, bases, gabinetes, dentre outras, para diversos segmentos da indústria;",
                    "Grande precisão dimensional;",
                    "Obra livre de entulhos durante a montagem;",
                    "Maior velocidade na execução.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={pavimentacao} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Pavimentação</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Pavimentação",
                  imagem: pavimentacao,
                  topicos: [
                    "Projeto de Pavimentação;",
                    "Manutenção e Reparo de Pavimentos;",
                    "Pavimentação de Áreas Industriais;",
                    "Revestimentos Especiais para Pavimentos.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={estrutura} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Estruturas metálicas</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Estruturas metálicas",
                  imagem: estrutura,
                  topicos: [
                    "Guarda-corpo e corrimão em aço carbono e inox;",
                    "Guarda-corpo e corrimão para segmento comercial e industrial;",
                    "Guarda-corpo e corrimão sob demanda e customizado;",
                    "Grades e portões em aço carbono e inox;",
                    "Grades e portões de chapa, tubo quadrado e tubo redondo;",
                    "Grades e portões para galpões, empresariais e comércios em geral;",
                    "Projetos para carga, descarga e enrolamento de caminhões;",
                    "Projeto para escadas do tipo marinheiro.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={obra} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Obra civil</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Obra civil",
                  imagem: obra,
                  topicos: [
                    "Gerenciamento de Projetos de Construção;",
                    "Fundações e Estruturas;",
                    "Alvenaria e Estruturas Metálicas;",
                    "Instalações Elétricas e Hidráulicas;",
                    "Revestimentos e Acabamentos;",
                    "Obras de Infraestrutura Urbana;",
                    "Planejamento e Orçamento de Obras;",
                    "Sustentabilidade em Construção;",
                    "Segurança e Saúde no Trabalho.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={locacao} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Terceirização</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Terceirização",
                  imagem: locacao,
                  topicos: [
                    "Suprir aumento da demanda;",
                    "Redução de custos;",
                    "Aumentar a qualidade dos serviços;",
                    "Otimizar o tempo de gestores.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={montagem} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Montagem industrial</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Montagem industrial",
                  imagem: montagem,
                  topicos: [
                    "Montagem de Equipamentos Industriais;",
                    "Instalação de Linhas de Produção;",
                    "Manutenção de Equipamentos Industriais;",
                    "Instalações hidráulicas em geral;",
                    "Logística e Planejamento de Montagem;",
                    "Gerenciamento de Projetos de Montagem;",
                    "Soldagem e Fabricação de Componentes;",
                    "Reparos em tubulações hidráulicas de água e esgoto;",
                    "Reparos em bombas de recalque, válvulas e registros.",
                  ],
                });
              }}
            />
          </div>
        </div>
        <div className="servico-container" data-aos="zoom-in">
          <img src={maquina} className="servico-img" />
          <div className="container-servico">
            <p className="titulo-servico">Máquinas Industriais</p>
            <MdPlaylistAddCircle
              className="icon-expand"
              onClick={() => {
                setModal(true);
                setServico({
                  titulo: "Máquinas Industriais",
                  imagem: maquina,
                  topicos: [
                    "Transporte de máquinas e equipamentos;",
                    "Içamento e movimentação de carga;",
                    "Transporte leve e pesado;",
                    "Trabalho por contrato e horários pré-fixados.",
                  ],
                });
              }}
            />
          </div>
        </div>
      </div>
      <Modal
        size="xs"
        open={modal}
        onClose={() => setModal(false)}
        className="font-poppins"
      >
        <Modal.Header>
          <Modal.Title className="d-flex justify-content-center align-items-center">
            <img className="p-1 servico-img-modal" src={servico.imagem} />
            <h3 className="p-4 titulo-modal">{servico.titulo}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <ul className="topico-modal">
              {servico.topicos.map((topico, index) => (
                <li key={index}>{topico}</li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModal(false)} appearance="primary">
            Voltar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Servicos;
