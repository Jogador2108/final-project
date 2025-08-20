import { perguntas } from "./perguntas.js";

const textoEl = document.getElementById("texto");
const opcoesEl = document.getElementById("opcoes");
const btnJogarNovamente = document.getElementById("jogarNovamente");

let estadoAtual = "inicio";

function mostraPergunta(chave) {
  const pergunta = perguntas[chave];
  estadoAtual = chave;

  textoEl.innerText = pergunta.texto;
  opcoesEl.innerHTML = "";

  const opcoes = pergunta.opcoes;
  if (Object.keys(opcoes).length === 0) {
    btnJogarNovamente.style.display = "block";
    return;
  }

  for (let opcao in opcoes) {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.addEventListener("click", () => mostraPergunta(opcoes[opcao]));
    opcoesEl.appendChild(botao);
  }
}

btnJogarNovamente.addEventListener("click", () => {
  estadoAtual = "inicio";
  btnJogarNovamente.style.display = "none";
  mostraPergunta(estadoAtual);
});

mostraPergunta(estadoAtual);
