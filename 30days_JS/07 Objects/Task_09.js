const book = {
    title: "JavaScript",
    author: "youtube",
    year: 1985,
}

let key = Object.keys(book)
let value = Object.values(book)

for (let i = 0; i < key.length; i++) {
    console.log(`${key[i]}: ${value[i]}`);
    
}