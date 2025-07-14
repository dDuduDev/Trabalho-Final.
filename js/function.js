const title = document.getElementById('title')
const startButton = document.getElementById('iniciar');
const countDisplay = document.getElementById('count');

function startGameCountdown() {
  startButton.style.display = 'none';
  iniciar.style.display = 'none';
  layout.style.display = "none";
  startCountdown(3, startGame);
}

function startGame() {
  countDisplay.textContent = 'GO!';
  // redireciona para outra pagina HTML
  window.location.href = './game.html'
}

function startCountdown(seconds, callback) {
  if (seconds > 0) {
    countDisplay.textContent = seconds;
    setTimeout(() => {
      startCountdown(seconds - 1, callback);
    }, 1000);
  } else {
    callback();
  }
}

//miguel//

const cores = [
  { nome: "Vermelho", cor: "red" },
  { nome: "Azul", cor: "blue" },
  { nome: "Verde", cor: "green" },
  { nome: "Amarelo", cor: "yellow" },
  { nome: "Roxo", cor: "purple" },
  { nome: "Preto", cor: "black" },
  { nome: "Laranja", cor: "orange" },
  { nome: "Rosa", cor: "pink" },
  { nome: "Marrom", cor: "brown" },
  { nome: "Cinza", cor: "gray" }
];

const nomes = document.getElementById("nomes");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const tempoL = document.getElementById("tempoL");
const tempoA = document.getElementById("tempoA");


let startTime;

function novaRodada() {
  let corTexto = cores[Math.floor(Math.random() * cores.length)];
  let corBotaoCerta = corTexto.cor;
  let corBotaoErrada = cores[Math.floor(Math.random() * cores.length)].cor;

  while (corBotaoErrada === corBotaoCerta) {
    corBotaoErrada = cores[Math.floor(Math.random() * cores.length)].cor;
  }

  nomes.textContent = corTexto.nome;
  nomes.style.color = cores[Math.floor(Math.random() * cores.length)].cor;

  if (Math.random() < 0.5) {
    button1.style.backgroundColor = corBotaoCerta;
    button2.style.backgroundColor = corBotaoErrada;
  } else {
    button1.style.backgroundColor = corBotaoErrada;
    button2.style.backgroundColor = corBotaoCerta;
  }

  startTime = new Date();
}

function escolherCor(corEscolhida) {
  let tempoDecorrido = ((new Date() - startTime) / 1000).toFixed(2);
    tempoA.textContent = `tempo: ${tempoDecorrido}s`;
  if (corEscolhida === cores.find(c => c.nome === nomes.textContent).cor) {
    tempoL.innerHTML += `<br>${tempoDecorrido}s`;
    novaRodada();
  } else {
    alert("Cor errada! Tente novamente.");
    novaRodada();
  }
}

button1.addEventListener("click", () => escolherCor(button1.style.backgroundColor));
button2.addEventListener("click", () => escolherCor(button2.style.backgroundColor));

novaRodada();