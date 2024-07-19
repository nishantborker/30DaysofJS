const book = {
    title: "JavaScript",
    author: "youtube",
    year: 1985,
}

for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}