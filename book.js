const Book = class{
    constructor(
        bookTitle,
        bookPubYear,
        bookAuthor,
        bookISBN
    ) {
        this.bookTitle = bookTitle,
        this.bookPubYear = bookPubYear,
        this.bookAuthor = bookAuthor,
        this.bookISBN = bookISBN
    }
}

let novel = new Book(
    "Alice\'s adventures in (...)",
    1865,
    'Lewis Caroll',
    970056734810
);


console.log(novel);