const usuarios = [
    {   nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];
const usuariosMaiores=[];
for (const usuario of usuarios){

    if(usuario.idade>=18){
        usuariosMaiores.push(usuario);
}
}
console.log(usuariosMaiores);