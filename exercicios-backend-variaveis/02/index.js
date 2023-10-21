console.log("De acordo com o aplicativo do tempo, agora está 73 ºF na sua cidade, se convertêssemos isso para Celsius, qual seria o resultado?");
const fahrenheit = 73;
celsius = (fahrenheit - 32) * (5 / 9);
let celsius_formatado = celsius.toFixed(2);
console.log(`O resultado é: ${celsius_formatado} °C`);