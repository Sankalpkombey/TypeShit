// The problem

/* function getProperty<T>(obj: T, key: string) {
  return obj[key]; 
} */ 

// --- TS has no idea key is actually a valid property of obj — T could be anything, and key could be any string at all, including "doesNotExist". So TS blocks it entirely,


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

/* 1. -- keyof T — a type meaning "the union of all property names on T." So if T is User (id, name, email, isActive), then keyof T is "id" | "name" | "email" | "isActive".
 2. -- K extends keyof T — this says "K can be any type, as long as it's one of T's actual keys." This is the "constraint" — K isn't fully free like T, it's restricted to a specific set.
 3. -- T[K] — "the type of the property at key K on T." This is called an indexed access type. If K is "id", T[K] is number. If K is "name", T[K] is string. */

const user: User = { id: 1, name: "Bob", email: "bob@test.com", isActive: true };

const Username = getProperty(user, "name");
const isActive = getProperty(user, "isActive");


interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

function updateField<T, K extends keyof T>(obj: T, key: K, value: T[K]): T{
    return {
        ...obj,
        [key]: value,
    };
}

const product: Product = { id: 1, name: "Widget", price: 9.99, inStock: true};

const updatedProduct = updateField(product, "price", 12.99);
console.log(updated)

/* updateField(product, "price", "12.99"); */
