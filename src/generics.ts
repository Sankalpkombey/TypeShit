// Say I want a function that returns the first item of an array. Without generics:

/* function getFirst(arr : any[]): any {
    return arr[0];
}

const num = getFirst([1, 2, 3]);
num.toUpperCase(); */ // error because numbers don't have a toUpperCase() method

// With generics
function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

/* const num = getFirst([1, 2, 3]);
console.log(num) */


const empty = getFirst<number>([]);
if (empty !== undefined) {
    console.log(empty.toFixed(2));
}

const num = getFirst([1, 2, 3]);
/* console.log(num) */


class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value
    }

    get(): T {
        return this.value
    }

    set(value: T): void {
        this.value = value;
    }
}

const nummberBox = new Box<number>(42)
/* console.log(nummberBox.get()); */
nummberBox.set(100);
/* nummberBox.set("hello"); */

const stringBox = new Box("hi")


function getLast<T>(arr: T[] ): T | undefined{
    return arr[arr.length - 1];
}

/* console.log(getLast([1, 2, 3]));
console.log(getLast(["a", "b", "c"]))
console.log(getLast([])); */

class Stack<T>{
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element)
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean{
        return this.items.length === 0
    }

    size(): number {
        return this.items.length
    }
  }

  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  /* console.log(numberStack.peek());
  console.log(numberStack.pop())
  console.log(numberStack.size()) */

  const stringStack = new Stack<string>();
  stringStack.push("hello");
  stringStack.push("world");
  console.log(stringStack.peek())
