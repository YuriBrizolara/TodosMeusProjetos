const numeros = [0, 122, 4, 6, 7, 8, 44];

const saoTodosPares = numeros.every(numero => numero % 2 === 0);

if (saoTodosPares) {
  console.log("array válido");
} else {
  console.log("array inválido");
}