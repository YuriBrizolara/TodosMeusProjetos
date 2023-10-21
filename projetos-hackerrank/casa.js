function perdaMinima(precos) {
    const n = precos.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = precos[i] - precos[j];
        }
    }

    let menorPerda = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (dp[i][j] < 0 && dp[i][j] < menorPerda) {
                menorPerda = dp[i][j];
            }
        }
    }

    return -menorPerda;
}

const precos = [30, 10, 54, 76, 1, 4, 35];
console.log(perdaMinima(precos));  // Saída: 6
