const usuarios = [
    {
        nome: "João",
        pets: [],
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
usuarios.forEach(pessoa => {
    const nome = pessoa.nome;
    const numPets = pessoa.pets.length;

    if (numPets === 0) {
        console.log(`Sou ${nome} e não tenho pets.`);
    } else if (numPets > 1) {
        console.log(`Sou ${nome} e tenho ${numPets} pets.`);
    } else {
        console.log(`Sou ${nome} e tenho 1 pet.`);
    }
});