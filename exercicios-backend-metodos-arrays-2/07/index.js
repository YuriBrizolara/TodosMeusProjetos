const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];
  const cepConsultado=00222444;
  const resultado = endereços.find((numero)=>{
    return numero.cep===cepConsultado;
  });
  console.log(resultado.rua);