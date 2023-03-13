import * as _ from 'lodash';

// async function hello() {
//     return 'world'
// }

// let lucky: number;

// lucky = '23'

// === !!  interface  || === //

type Style = 'bold' | 'italic';

let font: Style;

// font = 'something'

interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person = {
    first: "Jeff",
    last: 'Delaney'
}

const person2 = {
    first: "Jeff",
    last: 'Bezos',
    rich: true
}


// === !! Strong function types || === //
function pow(x: number, y: number): string {

    return Math.pow(x, y).toString();

}

// is now string
pow(23, 21)

// === !! Strong Array Types !! === //

type MyList = [number, string?, boolean?] // tuple from python
// use question mark syntax to make values optional

const arr: number[] = []

arr.push(1)
// arr.push('23') // errors bc it needs number type
// arr.push(false)

// === !! Generics !! === //

class Obserbable <T> {
    constructor(public value: T) {}
}