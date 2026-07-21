interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

async function fetchUser(id: number): Promise<User> {
    return {
        id,
        name: "Bob",
        email: "bob@test.com",
        isActive: true,
    };
}

async function main() {
    const user = await fetchUser(1);
    console.log(user.name);
}

/* main();  */


/* async function fetchUser(id: number): Promise<User> {
    return {id, name: "Bob"};
} */


/* async function fetchUserSafe(id: number): Promise<User> {
    try {
        return await fetchUser(id);
    } catch(error) {
        console.log(error.message);
        throw error;
    }
}   */ 
// Note --- As of modern TS, everything caught in a catch block is typed unknown by default — not any. This is intentional: JS lets you throw literally anything (throw "oops", throw 42, throw new Error(...)), so TS refuses to assume it has a .message property.


// Fix with narrowing
async function fetchUserSafe(id: number): Promise<User> {
    try {
        return await fetchUser(id);
    } catch(error){
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log("Unknown error:", error);
        }
        throw error;
    }
}

// ------------- Exercise -----------------------

class InsufficientFundsError extends Error {
    constructor(public balance: number, public requested: number) {
        super(`Cannot withdraw ${requested}, only ${balance} available`);
    }
}

async function withdraw(balance: number, amount: number): Promise<number> {
    if (amount > balance) {
        throw new InsufficientFundsError(balance, amount);
    }
    return balance - amount;
}


async function safeWithdraw(balance: number, amount: number): Promise<void> {
    try{
        await withdraw(balance, amount);
        console.log("Withdrawal successful");
    } catch(error) {
      if(error instanceof InsufficientFundsError) {
        console.log(
            `Insufficient funds. Balance: ${error.balance}, Requested: ${error.requested}`
        );
      } else if(error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Unknown error occurred")
      }
    }
}

safeWithdraw(1000, 500)
safeWithdraw(1000, 1500);