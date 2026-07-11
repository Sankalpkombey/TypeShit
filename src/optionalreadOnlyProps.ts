interface Order {
    id: number;
    item: string;
    quantity: number;
    note?: string;
    readonly createdAt: Date;
}

const order1 : Order = {
  id: 1,
  item: "Keyboard",
  quantity: 2,
  createdAt: new Date(),
};

const order2 : Order = {
  id: 2,
  item: "Mouse",
  quantity: 1,
  note: "Gift wrap please",
  createdAt: new Date()
};

function printNote(order : Order): void {
  if(order.note){
    console.log(order.note.toUpperCase())
  } else {
    console.log("No note provided");
  }  
}

/* printNote(order1)
printNote(order2) */


interface Invoice {
  id: number;
  amount: number;
  readonly issuedAt: Date;
  paidAt?: Date;
}

const invoice1 : Invoice = {
  id: 1,
  amount: 100,
  issuedAt: new Date(),
  paidAt: new Date()
};

const invoice2 : Invoice = {
  id: 2,
  amount: 200,
  issuedAt: new Date(),
  paidAt: undefined
};

const invoice3 : Invoice = {
  id: 3,
  amount: 300,
  issuedAt: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000),
};

function markAsPaid(invoice: Invoice) : Invoice{
  return {
    ...invoice,
    paidAt: new Date()
  };
}

function isOverdue(invoice: Invoice): boolean {
  if(invoice.paidAt){
    return false;
  }
  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
  return invoice.issuedAt.getTime() + thirtyDaysInMs < Date.now();
}

console.log(isOverdue(invoice1));
console.log(isOverdue(invoice2));
console.log(isOverdue(invoice3));

/* console.log(markAsPaid(invoice2)); */