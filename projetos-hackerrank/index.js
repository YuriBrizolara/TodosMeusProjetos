let nomeEditado = '';
for (let caractereEspeciais of stringCorrompida) {
   if (caractereEspeciais === '*' || caractereEspeciais === '%' 
   || caractereEspeciais === '('|| caractereEspeciais === ')' || caractereEspeciais === '&' 
   || caractereEspeciais === '$' || caractereEspeciais === '@' || caractereEspeciais === '!' || caractereEspeciais === '#' || caractereEspeciais ==='.'){
   //retirar todos os caracteres especiais
} else {
      nomeEditado = nomeEditado + caractereEspeciais;

   }
} console.log(nomeEditado);