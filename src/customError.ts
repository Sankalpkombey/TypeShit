// The base pattern (you already wrote this)
/* class ValidationError extends Error {
    constructor(public field: string, message: string) {
        super(message);
        this.name = "ValidationError";
    }
} */

class ValidationError extends Error {
    field: string;
    constructor(field: string, message: string) {
        super(message);
        this.field = field;
    }
}    

function validateAge(age: number): void {
    if (age < 0) {
        throw new ValidationError("age", "Age cannot be negative")
    }
}

try{
   validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed on field '${error.field}': ${error.message}`);
    } else if (error instanceof Error) {
        console.log("Unexpected error:", error.message);
    } else {
        console.log("Unknown error occured");
    }
}

// Multiple custom error types — this is the useful part for real backend code

class NotFoundError extends Error {
    constructor(public resource: string) {
        super(`${resource} not found`);
        this.name = "NotFoundError";
    }
}

class UnauthorizedError extends Error {
    constructor(){
        super("Unauthorized access");
        this.name = "UnauthorizedError";
    }
}

function handleError(error: unknown): void {
    if (error instanceof NotFoundError) {
        console.log(`404: ${error.resource} not found`);
    } else if (error instanceof UnauthorizedError) {
        console.log(`401: Unauthorized`);
    } else if (error instanceof ValidationError){
        console.log(`400: ${error.field} - ${error.message}`)
    } else if (error instanceof Error){
        console.log(`500: ${error.message}`)
    } else {
        console.log("500: Unknown error occurred");
    }
}

// ------------------ Exercise --------------------------------

class OutOfStockError extends Error {
    constructor(public productId: number, public requested: number, public available: number) {
        super(`Product ${productId}: requested ${requested}, only ${available} in stock`);
        this.name = "OutOfStockError";
    }
}

function placeOrder(productId: number, requested: number, available: number): void {
    if (requested > available) {
        throw new OutOfStockError(productId, requested, available)
    } console.log(`Order placed: ${requested} units of product ${productId}`);
}

function handleOrderError(error: unknown): void {
    if (error instanceof OutOfStockError){
        console.log(`Out of stock: product ${error.productId}, requested ${error.requested}, only ${error.available} available`);
    } else if (error instanceof Error) {
        console.log("Order error:", error.message)
    } else {
        console.log("Unknown error occurred");
    }
}

try{
    placeOrder(101, 5, 10)
} catch(error) {
    handleOrderError(error);
}

try {
    placeOrder(102, 15, 10);
} catch (error) {
    handleOrderError(error);
}
