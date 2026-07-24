// Useful whenever you're dealing with objects where you don't know the exact keys ahead of time

// The problem
/* function sumValues(dict: object): number {
  //  can't safely access properties on 'object' — TS doesn't know what's inside
} */

type Dictionary = {[key: string]: number};
// Read this as: "an object where the keys can be any string, and every value must be a number." You're not naming specific keys like id or name — you're describing a pattern that applies to however many keys the object ends up having.

function sumValues(dict: Dictionary): number {
    let total = 0;
    for (const key in dict) {
        total += dict[key];
    }
    return total;
}

const prices: Dictionary = {
    apple: 1.5,
    banana: 0.5,
    cherry: 3,
};

console.log(sumValues(prices));

/* const badie: Dictionary = {
    apple: 1.5,
    banana: "cheap", // Type 'string' is not assignable to type 'number'
} */


// A more realistic version — mixing index signatures with known keys
// Sometimes you know some fields for certain, plus arbitrary extras: 
interface Config {
    appName: string;
    version: string;
    [key: string]: string;
}

const config: Config = {
    appName: "MyApp",
    version: "1.0.0",
    theme: "dark",
    region: "us-east",
}


// ----------- Exercise --------------------

type WordCount = { [word: string]: number };

function countWords(text: string): WordCount {
    const words = text.toLowerCase().split(" ");
    const counts: WordCount = {};

    for (const word of words) {
        if(counts[word]) {
            counts[word] += 1;
        } else {
            counts[word] = 1;
        }
    }

    return counts;
}

console.log(countWords("the cat sat on the mat"));