/* enum Role {
    Admin,
    Editor,
    Viewer
} */

enum Role {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}    

const myRole: Role = Role.Admin;
/* console.log(myRole); */

function hasAccess(role: Role): boolean {
    if (role === Role.Admin || role === Role.Editor) {
        return true;
    }
    return false;
}

/* console.log(hasAccess(Role.Admin));
console.log(hasAccess(Role.Editor));    
console.log(hasAccess(Role.Viewer)); */

/* console.log(hasAccess("5")) */

enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}

function canCancel(status: OrderStatus): boolean {
    return status === OrderStatus.Pending;
}

console.log(canCancel(OrderStatus.Pending));
console.log(canCancel(OrderStatus.Shipped));
console.log(canCancel(OrderStatus.Delivered));