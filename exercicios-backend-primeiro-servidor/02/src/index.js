const express = require('express');
const app = express();

let minutos = 0;
let segundos = 0;
let cronometroEmAndamento = false;
let intervalId;

// Função para formatar o tempo como "mm minutos e ss segundos"
function formatarTempo(min, seg) {
  return `${min.toString().padStart(2, '0')} minutos e ${seg.toString().padStart(2, '0')} segundos`;
}

// Rota principal que mostra o tempo atual do cronômetro
app.get('/', (req, res) => {
  res.send(`Tempo atual do cronômetro: ${formatarTempo(minutos, segundos)}`);
});

// Rota para iniciar o cronômetro
app.get('/iniciar', (req, res) => {
  if (!cronometroEmAndamento) {
    cronometroEmAndamento = true;
    intervalId = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
    }, 1000); // Atualiza o cronômetro a cada segundo

    res.send('Cronômetro iniciado!');
  } else {
    res.send('O cronômetro já está em execução.');
  }
});

// Rota para pausar o cronômetro
app.get('/pausar', (req, res) => {
  if (cronometroEmAndamento) {
    clearInterval(intervalId);
    cronometroEmAndamento = false;
    res.send('Cronômetro pausado!');
  } else {
    res.send('O cronômetro não está em execução.');
  }
});

// Rota para continuar o cronômetro
app.get('/continuar', (req, res) => {
  if (!cronometroEmAndamento) {
    cronometroEmAndamento = true;
    intervalId = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
    }, 1000);

    res.send('Cronômetro continuando!');
  } else {
    res.send('O cronômetro já está em execução.');
  }
});

// Rota para zerar o cronômetro
app.get('/zerar', (req, res) => {
  minutos = 0;
  segundos = 0;

  if (cronometroEmAndamento) {
    clearInterval(intervalId);
    cronometroEmAndamento = false;
  }

  res.send('Cronômetro zerado!');
});

// Inicie o servidor na porta 8000
app.listen(8000, () => {
  console.log('Servidor está ouvindo na porta 8000...');
});