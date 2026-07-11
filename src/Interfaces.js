var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function deactivateUser(user) {
    return __assign(__assign({}, user), { isActive: false });
}
/* {const bob = { id: 1, name: "Bob", email: "bob@test.com", isActive: true, age: 30}
const updated = deactivateUser(bob);
console.log(updated)} */
/* const bobWithAge: User = { id: 1, name: "Bob", email: "bob@test.com", isActive: true, age: 30}
const updated = deactivateUser(bobWithAge);
console.log(updated) */
function promoteUser(user) {
    return __assign(__assign({}, user), { email: "promoted-" + user.email });
}
var tony = { id: 1, name: "Bob", email: "bob@test.com", isActive: true };
var updated = promoteUser(tony);
console.log(updated);
/* console.log(promoteUser(tony)) */ 
