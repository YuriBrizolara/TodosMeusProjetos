const cpf = "12345678900";
const cnpj = "12345678000199";
if(cpf.length>11 || cpf.length<11){
    console.log('CPF Inválido');
}else{
    formantandoCpf();
}
if(cnpj.length>14 || cnpj.length<14){
    console.log('CNPJ Inválido');
}else{
    formantandoCnpj();
}
function formantandoCpf(){
    let primeiraParte="",segundaParte="",terceiraParte="",quartaParte="";
    primeiraParte=cpf.slice(0,3);
    segundaParte=cpf.slice(3,6);
    terceiraParte=cpf.slice(6,9);
    quartaParte=cpf.slice(9,11);    
    console.log(`${primeiraParte}.${segundaParte}.${terceiraParte}-${quartaParte}`);
}
function formantandoCnpj(){
    let primeiraParte="",segundaParte="",terceiraParte="",quartaParte="",quintaParte="";
    primeiraParte=cnpj.slice(0,2);
    segundaParte=cnpj.slice(2,5);
    terceiraParte=cnpj.slice(5,8);
    quartaParte=cnpj.slice(8,12);
    quintaParte=cnpj.slice(12,14);    
    console.log(`${primeiraParte}.${segundaParte}.${terceiraParte}/${quartaParte}-${quintaParte}`);
}