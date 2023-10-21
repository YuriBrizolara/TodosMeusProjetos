const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
function atenderPaciente(){
    pacientes.shift();
    listaDeTodosOsPacientes();
}
function agendarPaciente(nomePaciente){
    pacientes.push(nomePaciente);
    listaDeTodosOsPacientes();
}
function listaDeTodosOsPacientes(){
    console.log(pacientes.join());
}
agendarPaciente("mario");
listaDeTodosOsPacientes();
function cancelarAtendimento(nomePaciente){
    const localizador=pacientes.includes(nomePaciente)
    if (localizador===true){
        const indice = pacientes.indexOf(nomePaciente);
        pacientes.splice(indice);
    }
}
