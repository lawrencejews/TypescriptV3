// Types for a data layer W/ Typescript

class Book {
    constructor(public author: string, public title: string) {}
}
interface EntityMap {
    book: Book
}
//=======================================================================================

class Movie {
    constructor(public director: string) {}
}
interface EntityMap {
    movie: Movie  
}

//=======================================================================================

class Song {
    constructor(public artist: string) { }
}

interface EntityMap {
    song: Song
}
//=======================================================================================

class Store {
    get< K extends keyof EntityMap>(kind: K, id: string): EntityMap[K] { }
    getAll< K extends keyof EntityMap>(kind: K): EntityMap[K][] { }
    create< K extends keyof EntityMap>(kind: K, toCreate: EntityMap[K]): void { }
    update< K extends keyof EntityMap>(kind: K, id: string, props: Partial<EntityMap[K]>){}
}

const myBook = new Book('Lawrence', 'Learning Typescript Intermediate')
const store = new Store()
store.get('book', '123') // Book
store.getAll('book') // Book[]
store.create('book', {author: 'Lawrence', title: 'You need both the author and a title'})
store.update('book', '123', {author: ''}) //Book.