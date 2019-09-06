// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

let address = createAddress('1st Street', 'Lucknow', '226001');

function showAddress(obj) {
  for (let key in obj) console.log(key, obj[key]);
}

showAddress(address);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
