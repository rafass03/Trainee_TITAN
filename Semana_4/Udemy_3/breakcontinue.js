const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in nums){
    if (i == 5) {
        break;
    }
    console.log(`nums[${i}]: ${nums[i]}`);
}

for (let j in nums){
    if (j == 5) {
        continue;
    }
    console.log(`nums[${j}]: ${nums[j]}`);
}

externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo;
        }
        console.log(`a: ${a}, b: ${b}`);
    }
} //Não use rótulos, é uma má prática