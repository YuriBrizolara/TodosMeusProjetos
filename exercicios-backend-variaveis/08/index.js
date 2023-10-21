let entrada = require('prompt-sync')({ sigint: true });
let raio_circulo = entrada('Digite o raio do circulo:');
cumprimento_circulo = (2 * Math.PI * raio_circulo);
area_circulo = (Math.PI * (raio_circulo ** 2));
let cumprimento_formatado = cumprimento_circulo.toFixed(2), area_formatado = area_circulo.toFixed(2);
console.log(cumprimento_formatado);
console.log(area_formatado);
