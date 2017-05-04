

// enum Category { LANGUAGE, FRAMEWORK, OTHER };


// function getAllBooks() {

//     let books = [
//         { title: 'JavaScript', author: 'Nag', available: true, category: Category.LANGUAGE },
//         { title: 'Typescript', author: 'Ria', available: false, category: Category.LANGUAGE },
//         { title: 'Angular-2', author: 'Nag', available: true, category: Category.FRAMEWORK },
//         { title: 'New Book', author: 'Nag', available: true, category: Category.OTHER }
//     ];
//     return books;

// }


// function logFirstAvailable(books): void {

//     let numberOfBooks: number = books.length;
//     let firstAvailable: string = '';

//     for (let currentBook of books) {
//         if (currentBook.available) {
//             firstAvailable = currentBook.title;
//             break;
//         }
//     }

//     console.log(`Total Books: ${numberOfBooks}`);
//     console.log(`First Available: ${firstAvailable}`);

// }

// const allBooks = getAllBooks();
// logFirstAvailable(allBooks);


// function getBookTitlesByCategory(categoryFilter: Category): Array<string> {

//     const allBooks = getAllBooks();
//     const filteredTitles: string[] = [];

//     console.log('getting books in category :' + Category[categoryFilter]);

//     for (let currentBook of allBooks) {
//         if (currentBook.category === categoryFilter) {
//             filteredTitles.push(currentBook.title);
//         }
//     }

//     return filteredTitles;

// }

// function logBookTitles(titles: string[]): void {
//     for (let title of titles) {
//         console.log(title);
//     }
// }


// const langBooks = getBookTitlesByCategory(Category.FRAMEWORK);
// logBookTitles(langBooks);



// function createCustomerId(name:string,id:number):string {
//     return name + id;
// }

// let customerId = createCustomerId("nag", 123);
// console.log(customerId);



// const allBooks = getAllBooks();
// let nagBooks = allBooks.filter(book=>book.author==="Nag");
// nagBooks.forEach((book,idx,arr) => { console.log(`${idx+1} - ${book.title}`)});



//-------------------------------------------------------------------------

// function Type


// let greet: (name: string) => string;


// function sayHello(name) {
//     return "Hello " + name;
// }
// function sayHi(name) {
//     return "Hi " + name;
// }


// greet = sayHello;
// greet = sayHi;



//-------------------------------------------------------------------------

// optional and default parameters

// function createCustomer(name: string="Guest", age?: number, city?: string): void{
//     console.log("creating customer "+name);
// }


// createCustomer("Nag",33,"chennai");


//-------------------------------------------------------------------------

// Rest param

// function getBooks(cat:Category,...titles:String[]) {
//     console.log(Category[cat]);
//     console.log(titles);
// }

// getBooks(Category.LANGUAGE,"A","B");


//-------------------------------------------------------------------------


// function overloading


// function getTitles(author: string): string[];
// function getTitles(avaliable: boolean): string[];

// function getTitles(bookProperty: any): string[] {
//     let result: string[] = [];
//     if (typeof bookProperty === "string") {
//         getAllBooks().filter(book => {
//             if (book.author === bookProperty) {
//                 result.push(book.title);
//             }
//         })
//     }
//     if (typeof bookProperty === "boolean") {
//         getAllBooks().filter(book => {
//             if (book.available === bookProperty) {
//                 result.push(book.title);
//             }
//         })
//     }
//     return result;
// }


// let titles = getTitles(true);
// titles.forEach(title => console.log(title))


//-------------------------------------------------------------------------

// interface Wheel{
//     rotate: () => void;
// }

// let car = {
//     move: function (wheel:Wheel) {
//         wheel.rotate();
//         console.log("Car moving.....");
//     }
// };

// let mrfWheel = { rotate: function () { console.log("MRF Wheel roating..."); } };
// let ceatWheel = { rotate: function () { console.log("CEAT Wheel rotate..."); } };

// car.move(mrfWheel);
// car.move(ceatWheel);


//-------------------------------------------------------------------------

// book ==> id:number , title:string , available:boolean


// interface Book{
//     id: number,
//     title: string,
//     author: string,
//     pages?: number,
//     getSomething:(inp:string)=>void
// }

// let book1: Book = { title: "title1", author: 'Nag', id: 1214234, getSomething: function (inp) { }}

//-------------------------------------------------------------------------






// // interface as function type


// interface I {
//     (inp1: number): string
// }

// // let intToString: (inp1: number) => string;
// // or
// let intToString: I;



// function myFunc1(n: number): string {
//     return "num-" + n
// }

// function myFunc2(n: number): string {
//     return "num-" + n
// }

// intToString = myFunc2;



//--------------------------------------------------------------------



// interface Wheel{
//     radius: number;
//     rotate: () => void;
// }



// class MRFWheel implements Wheel {
//     radius: number;
//     rotate() {
//         console.log('MRF Wheel roating...');
//     }
// }

// let mrfWheel: Wheel = new MRFWheel();

// mrfWheel.rotate();

//--------------------------------------------------------------------


// class Book{
//     title: string;
//     _author: string;
//     set author(author) {
//         if (author) {
//             this._author = author;
//         }    
//     }
//     get author() {
//         return this._author;
//     }
// }

// let book = new Book();
// book.title = "title";
// book.author = "Nag"; // set

// book.author = ""; // set

// console.log(book.author); // get

// console.log(book._author);

//--------------------------------------------------------------------



// class Author{
//      name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     showName() {
//         console.log(this.name);
//     }
// }

// let author = new Author("Nag");
// console.log(author.name);

//--------------------------------------------------------------------

// Abstract Class


// abstract class LivingThing {

//     eat() {

//     }
//     sleep() {

//     }
//     abstract work(): void

// }

// // let lt = new LivingThing();

// class Human extends LivingThing {
//     work(): void {

//     }
// }

//--------------------------------------------------------------------


// import { sayHello } from './mod1';
// sayHello();


//--------------------------------------------------------------------

// Generics



// var list = new Array<string>(5);
// // list.push(1);
// list.push("str");



// function logAndReturn<T>(inp:T):string {
//     return inp+"";
// }


// let out:string=logAndReturn<number>(12);



//-----------------------------------------------------------

interface Subject{
    name:string
}

class Java implements Subject{
    name:string=".java"
}

class JS implements Subject{
    name:string=".js"
}

class Trainer<T extends Subject>{

    subject: T;
    
    getSubject() {
        return this.subject;
    }

}


let javaTnr = new Trainer<Java>();
javaTnr.subject = new Java();

let jsTnr = new Trainer<JS>();
jsTnr.subject = new JS();

// javaTnr.subject = new Array();



console.log(javaTnr.getSubject().name);


















