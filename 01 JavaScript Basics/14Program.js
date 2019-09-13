// 1 = 00000001
// 2 = 00000010
// R = 00000011
// R = 00000000

console.log(1 | 2); // Bitwise OR
// Expected output -> 00000011

console.log(1 & 2); // Bitwise AND

// Read, Write, Execute

// 00000100
// 00000110
// 00000111

const readPermission = 4;
const writePermission = 2;
const writePermission = 1;

myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);
let message = myPermission & readPermission ? 'YES' : 'NO';
console.log(message);
