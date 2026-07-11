function getStatusMessage(status: Status): string {
  switch (status) {
    case "pending":
      return "Waiting to ship";
    case "shipped":
      return "On its way";
    case "delivered":
      return "Delivered";
    case "cancelled":
      return "Order was cancelled";
  }
}

type Status = "pending" | "shipped" | "delivered" | "cancelled";

/* console.log(getStatusMessage("cancelled")) */

function getPaymentFee(method: PaymentMethod): number {
    switch(method){
    case "cash":
      return 0;
    case "upi":
      return 1;
    case "net-banking":
      return 2;
    }
}

type PaymentMethod = "cash" | "upi" | "net-banking"

console.log(getPaymentFee("cash"))