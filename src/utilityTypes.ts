interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

// 1. Partial<T> — makes every field optional

function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates};
}

const user: User = { id: 1, name: "Bob", email: "bob@test.com", isActive: true };

const Updated = updateUser(user, { name: "Robert" }); // only need to pass what's changing
/* console.log(Updated); */
// Note --- Without Partial, updates: User would force you to pass all four fields every time you wanted to change just one — annoying and unrealistic for a real update function. Partial<User> says "any subset of User's fields, all optional.



// 2. Pick<T, Keys> — selects only specific fields

function getSummary(user: User): Pick<User, "id" | "email"> {
    return { id: user.id, email: user.email };
}

const summary = getSummary(user);
/* console.log(summary); */
// Note ---- Use this when you want a "narrower view" of a type — e.g. an API response that only exposes some fields.



// 3. Omit<T, Keys> — the inverse: everything except specific fields

type UserSummary = Omit<User, "email">;

const publicUser: UserSummary = { id: 1, name: "Bob", isActive: true };
/* console.log(publicUser) */
// Note --- Handy for "give me everything except sensitive fields" — e.g. hiding email or passwordHash from a public-facing type



// 4. Record<Keys, ValueType> — build an object type from a set of keys, all mapped to the same value type

enum Role {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER",
}

type RolePermissions = Record<Role, string[]>;

const permissions:  RolePermissions = {
    [Role.Admin]: ["read", "write", "delete"],
    [Role.Editor]: ["read", "write"],
    [Role.Viewer]: ["read"],
}
console.log(permissions)

/* const brokenPermissions: RolePermissions = {
  [Role.Admin]: ["read", "write", "delete"],
  [Role.Editor]: ["read", "write"],
} */

// Note ---   Record<Role, string[]> says "an object with exactly one entry per Role value, and each value is a string[]
// TS forces you to cover every key — great for catching "forgot to handle a case" bugs, similar to the exhaustiveness check



// ----------- Exercise ---------------------------
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    inStock: boolean;
}

function updateProduct(product: Product, updates: Partial<Product>): Product {
    return { ...product, ...updates }
}

const newproduct: Product = {id: 1, name: "trimmer", price: 500, description: "buttery smooth", inStock: true }
const newUpdated = updateProduct(newproduct, { price: 600 });
console.log(newUpdated);



function getDetaiils(product: Product): Pick<Product, "id" | "name" | "price"> {
  return {id: product.id, name: product.name, price: product.price}
}

const details = getDetaiils(newproduct);
console.log(details)



type productDetail = Omit<Product, "description">;

const productInfo: productDetail = { id: 1, name: "trimmer", price: 500, inStock: true }
console.log(productInfo)


enum Category {
  Electronics = "electronics",
  Clothing = "clothing",
  Food = "food",
}

type productCategories = Record<Category, Product[]>

const categories: productCategories = {
    [Category.Electronics]: [newproduct],
    [Category.Clothing]: [],
    [Category.Food]: [],
}

console.log(categories)