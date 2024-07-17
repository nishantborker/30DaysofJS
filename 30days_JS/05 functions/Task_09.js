function highOrder(num, fact) {
    let f = 1
    for (let i = 1; i <= num; i++) {
        f = fact(f, i)
    }
    console.log(f);
}

function fact(f, i) {
  return f * i;
}

highOrder(5, fact);
