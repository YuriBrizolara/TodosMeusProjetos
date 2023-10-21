let montante = 90000, numero_meses = 24, capital_inicial = 60000;
taxa_jurros = ((((montante) ** 1 / numero_meses) / capital_inicial) - 1);
console.log(`O seu financiamento de ${capital_inicial} reais teve uma taxa de juros de ${taxa_jurros}, pois após ${numero_meses} meses você teve que pagar ${montante} reais.`);
