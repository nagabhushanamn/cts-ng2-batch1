function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0; _i < books.length; _i++) {
        var currentBook = books[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
    console.log('Getting books in category: ' + Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0; _i < allBooks.length; _i++) {
        var currentBook = allBooks[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0; _i < titles.length; _i++) {
        var title = titles[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0; _a < bookIDs.length; _a++) {
        var id = bookIDs[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (var _i = 0; _i < allBooks.length; _i++) {
            var book = allBooks[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (var _a = 0; _a < allBooks.length; _a++) {
            var book = allBooks[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
//*********************************************
var checkedOutBooks = GetTitles(false);
checkedOutBooks.forEach(function (title) { return console.log(title); });
// let myBooks: string[] = CheckoutBooks('Thorne', 1, 3, 4);
// myBooks.forEach(title => console.log(title));
//LogFirstAvailable();
// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));
//CreateCustomer('Michelle');
//CreateCustomer('Leigh', 6);
//CreateCustomer('Marie', 12, 'Atlanta');
// let x: number;
// x = 5;
// let IdGenerator: (chars: string, nums: number) => string;
// IdGenerator = (name: string, id: number) => { return id + name; }
// let myID: string = IdGenerator('daniel', 20);
// console.log(myID);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val)); 
//# sourceMappingURL=app.js.map