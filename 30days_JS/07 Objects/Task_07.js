const book = {
    title: "JavaScript",
    author: "youtube",
    year: 1985,
    func: () => `Title of the book is ${this.title} and published in ${this.year}`
}

console.log(book.func());
