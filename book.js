const bookTitle = "Alice\'s adventures in wonderland";
const bookPubYear = 1865;
const bookAuthor = 'Lewis Caroll';
const bookISBN = 970056734810;

const Book = class{
    constructor(
        title,
        pubYear,
        author,
        ISBN
    ) {
        this.title = title;
        this.pubYear = pubYear;
        this.author = author;
        this.ISBN = ISBN;
    }
}

let novel = new Book(
    bookTitle,
    bookPubYear,
    bookAuthor,
    bookISBN
);


console.log(novel);