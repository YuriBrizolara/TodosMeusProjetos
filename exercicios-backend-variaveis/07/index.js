const populaçao = 1000, pess_podem_ser_infec = 4, tempo = 100;
const p = populaçao * Math.pow(pess_podem_ser_infec, tempo / 7);
let p_formatado = p.toFixed(0);
console.log(p_formatado);