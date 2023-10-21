const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
function encontrarDono(pet){
    let achamos=false;
    for (const indice of usuarios) {
        if(indice.pets==pet){
            console.log(`O dono(a) do(a) ${pet} é o(a) ${indice.nome}`);
            achamos=true;
        }else if(indice.pets.length>1){
            for (const i of indice.pets) {
                if(i==pet){
                    console.log(`O dono(a) do(a) ${pet} é o(a) ${indice.nome}`);
                    achamos=true;
                }
            }
        }
    }
    if(achamos===false){
        console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
    }    
}
encontrarDono("Max");