const library = {
    name: "City Library",
    address: "123 Library St, Booktown",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            yearPublished: 1960,
            isbn: "978-0-06-112008-4"
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian",
            yearPublished: 1949,
            isbn: "978-0-452-28423-4"
        },
        {
            title: "Moby Dick",
            author: "Herman Melville",
            genre: "Adventure",
            yearPublished: 1851,
            isbn: "978-0-14-243724-7"
        }
    ],
    staff: [
        {
            name: "Jane Doe",
            position: "Head Librarian",
            employeeId: 1001
        },
        {
            name: "John Smith",
            position: "Assistant Librarian",
            employeeId: 1002
        }
    ]
};

console.log(library);
