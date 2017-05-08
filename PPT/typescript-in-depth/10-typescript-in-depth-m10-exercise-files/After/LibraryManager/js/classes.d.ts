import * as Interfaces from './interfaces';
declare class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void;
}
declare abstract class ReferenceItem {
    title: string;
    protected year: number;
    private _publisher;
    static department: string;
    constructor(title: string, year: number);
    printItem(): void;
    publisher: string;
    abstract printCitation(): void;
}
export { UniversityLibrarian, ReferenceItem };
