const book = {
    title: "JavaScript",
    author: "youtube",
    year: 1985,
    func: (year) => book.year = year,
  };
  book.func(2024)
  console.log(book);
  