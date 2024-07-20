function Sum(...num) {
    let sum = num.reduce((acc, curr) => acc + curr, 0)
    console.log(sum);
}

Sum(1, 2, 3, 4, 5)