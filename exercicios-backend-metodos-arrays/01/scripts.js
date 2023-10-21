const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas.reverse();
let transformarFrutasString=frutas.join();
console.log(transformarFrutasString);
frutas.reverse();
frutas.shift();
frutas.pop();
frutas.push('Melão');
console.log(frutas);