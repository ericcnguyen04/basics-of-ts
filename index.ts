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

