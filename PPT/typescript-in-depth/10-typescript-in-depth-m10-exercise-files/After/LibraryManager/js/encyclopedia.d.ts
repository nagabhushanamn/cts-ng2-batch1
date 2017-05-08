import { ReferenceItem } from './classes';
export default class Encyclopedia extends ReferenceItem {
    edition: number;
    constructor(newTitle: string, newYear: number, edition: number);
    printItem(): void;
    printCitation(): void;
}
