const mapa = document.getElementById("mapa-container");
const nome = document.getElementById("fazenda-nome");
const desc = document.getElementById("fazenda-desc");
const impacto = document.getElementById("fazenda-impacto");
const carrossel = document.getElementById("carrossel");
const fotoAtual = document.getElementById("foto-atual");
const btnEsquerda = document.getElementById("btn-esquerda");
const btnDireita = document.getElementById("btn-direita");
const infoBox = document.getElementById("fazenda-info");

let indiceAtual = 0;
let fotosAtuais = [];

const fazendas = [
  {
    nome: "Fazenda Monte Bello – Ribeirão Claro",
    desc: "Produz café, fruticultura e oferece turismo rural com hospedagem.",
    impacto: "Tornou-se um destino turístico que conecta visitantes urbanos com o campo.",
    fotos: ["fotos/montebello1.jpg", "fotos/montebello2.jpg", "fotos/montebello3.jpg"],
    top: "20%",
    left: "30%",
  },
  {
    nome: "Castrolanda Cooperativa – Castro",
    desc: "Maior produtora de leite do Brasil, também atua com suínos e derivados.",
    impacto: "Promove eventos como o Agroleite, aproximando campo e cidade.",
    fotos: ["fotos/castrolanda1.jpg", "fotos/castrolanda2.jpg", "fotos/castrolanda3.jpg"],
    top: "45%",
    left: "50%",
  },
  {
    nome: "Fazenda Capão Redondo – Tibagi",
    desc: "Área de experimentação agrícola e pesquisa com instituições urbanas.",
    impacto: "Integra ensino e inovação urbana à produção rural.",
    fotos: ["fotos/capao1.jpg", "fotos/capao2.jpg", "fotos/capao3.jpg"],
    top: "50%",
    left: "60%",
  },
  {
    nome: "Fazenda Paraná – Região Metropolitana",
    desc: "Criação de gado e suínos com práticas sustentáveis.",
    impacto: "Serve de modelo para integração ambiental e urbana.",
    fotos: ["fotos/parana1.jpg", "fotos/parana2.jpg", "fotos/parana3.jpg"],
    top: "60%",
    left: "55%",
  },
  {
    nome: "Fazenda em Reserva – Reserva (Centro-Sul)",
    desc: "Produção de soja em larga escala com reserva legal preservada.",
    impacto: "Fornece grãos para indústrias urbanas e alimenta cidades.",
    fotos: ["fotos/reserva1.jpg", "fotos/reserva2.jpg", "fotos/reserva3.jpg"],
    top: "70%",
    left: "45%",
  }
];

// Atualiza a imagem do carrossel
function atualizarImagem() {
  fotoAtual.src = fotosAtuais[indiceAtual];
}

btnEsquerda.addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + fotosAtuais.length) % fotosAtuais.length;
  atualizarImagem();
});

btnDireita.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % fotosAtuais.length;
  atualizarImagem();
});

// Criação dos marcadores
fazendas.forEach(fazenda => {
  const marcador = document.createElement("div");
  marcador.classList.add("marcador");
  marcador.style.top = fazenda.top;
  marcador.style.left = fazenda.left;
  marcador.title = fazenda.nome;

  marcador.addEventListener("click", () => {
    nome.textContent = fazenda.nome;
    desc.textContent = fazenda.desc;
    impacto.textContent = fazenda.impacto;

    fotosAtuais = fazenda.fotos;
    indiceAtual = 0;

    atualizarImagem();
    carrossel.classList.remove("hidden");
    infoBox.classList.remove("hidden");
  });

  mapa.appendChild(marcador);
});
