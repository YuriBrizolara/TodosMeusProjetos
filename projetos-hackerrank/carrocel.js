const sequencia = ['>', '>', '>', '>', '>', '>', '>', '>', '>'];
let carrocel = 0;
const numImagens = 6;
for (const simbolo of sequencia) {
    if (simbolo === '>') {
        carrocel++;
    } else if (simbolo === '<') {
        carrocel--;
    }
    if (carrocel > 6) {
        carrocel = 0;
    } else if(carrocel < 0) {
        carrocel = 6;
    }
        
    

}

console.log(carrocel);