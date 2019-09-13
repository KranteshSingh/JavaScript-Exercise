const address = {
  street: '420th Stree',
  city: 'Lucknow',
  zipCode: '226017'
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
