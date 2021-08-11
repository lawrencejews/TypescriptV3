// Get keys of type T whose values are assignable to type U

interface Color {
  red: string;
  green: number;
  blue: string;
}

type Foo = number | never

type ElementFunction = (...args: any[]) => (Element | Element[])


type FilteredKeys<ToFilter, Condition> 
= { [P in keyof ToFilter]: ToFilter[P] extends Condition ? P : never } [keyof ToFilter] & keyof Document; 


type RelevantColorKeys = FilteredKeys<Color, number>

type RelevantDocumentKeys = FilteredKeys<Document, ElementFunction>


type ValueFilteredDoc = Pick<Document, RelevantDocumentKeys>
//    ^?

function load(doc: ValueFilteredDoc) {
  doc.querySelector('input')
  doc
// ?
//type RelevantDocumentKeys = FilteredKeys<Document, (...args: any[]) => (Element | Element[])>
}