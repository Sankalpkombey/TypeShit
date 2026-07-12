type ApiResponse =
  | { success: true ; data: User}
  | { success: false; error: string};

function handleResponse(res: ApiResponse): void {
    if (res.success) {
        console.log("User:", res.data.name);
    } else {
        console.log("Error:", res.error);
    }
}

const good: ApiResponse = { success: true, data: { id: 1, name: "Alice", email: "alice@example.com", isActive: true } };
const bad: ApiResponse = { success: false, error: "User not found" };  

/* handleResponse(good);
handleResponse(bad); */


type Action = 
  | { type: "attack"; damage: number }
  | { type: "heal"; amount: number }
  | { type: "flee" };

  function resolveAction(action: Action): string {
    switch(action.type) {
        case "attack":
          return `Deals ${action.damage} damage`;
        case "heal":  
          return `Heals ${action.amount} HP`;
        case "flee":
          return `Ran away`;    
    }
  }

  /* const attackAction: Action = { type: "attack", damage: 15 };
  console.log(resolveAction(attackAction)) */

  type PaymentResult = 
  | {status: "success"; transactionId: string}
  | {status: "failed"; reason: string }
  | {status: "pending"; retryAfter: number}

  function describeResult(result: PaymentResult): string {
    switch(result.status) {
        case "success":
          return `Success: ${result.transactionId} id`;
        case "failed":  
          return `Failed: ${result.reason}`;
        case "pending":
          return `Pending: ${result.retryAfter}`;    
    }
  }

  const paymentStatus: PaymentResult = { status: "success", transactionId: "ahsvdv011" }
  console.log(describeResult(paymentStatus))