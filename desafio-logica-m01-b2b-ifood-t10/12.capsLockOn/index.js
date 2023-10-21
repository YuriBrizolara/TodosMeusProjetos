function processData(input) {
    //Enter your code here
    const primeiraLetraMinuscula=input[0]===input[0].toLowerCase()
    const segundaLetraMaiuscula=input.slice(1)===input.slice(1).toUpperCase()
    const segundaLetraMinuscula=input.substring(1,2)===input.substring(1,2).toLowerCase()
    const primeiraLetraMaiuscula=input[0]===input[0].toUpperCase()
    let inputFormatado="";
        if( primeiraLetraMinuscula && segundaLetraMaiuscula){
            inputFormatado=input[0].toUpperCase();
            inputFormatado+=input.slice(1).toLowerCase();
        }
        else if(input===input.toUpperCase()){
            inputFormatado=input.toLowerCase();
        }
        else {
            inputFormatado=input;
        }
console.log(inputFormatado);
}