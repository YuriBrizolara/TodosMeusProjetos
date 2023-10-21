const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function consultorio(lista,tipoConsulta,nomePaciente) {
    if(tipoConsulta==="atender"){
        lista.shift();
    }else if(tipoConsulta==="agendar"){
        lista.push(nomePaciente);
    }
    console.log(lista.join());
}
consultorio(pacientes,"agendar","mario")
