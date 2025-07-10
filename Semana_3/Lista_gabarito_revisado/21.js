function calcularPreco (idade) {
    if(idade < 10){
        return 100 + 80
    }
    else if(10 <= idade && idade <= 30) {
        return 100 + 50
    }
    else if (30 < idade && idade <= 60) {
        return 100 + 95
    }
    else {
        return 100 + 130
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(52));
console.log(calcularPreco(80));