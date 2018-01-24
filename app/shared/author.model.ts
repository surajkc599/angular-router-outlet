import { Book } from './book.model';

export class Author {
    name: string;
    id: number;
    location: string;
    age: number;
    books: Book[];

    constructor(public authName: string, public authId: number, public authLocation: string,
        public authAge: number, authorBooks: Book[]) {
            this.books = authorBooks;
    }
}
