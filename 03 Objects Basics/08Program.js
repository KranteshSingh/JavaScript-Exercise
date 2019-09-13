const circle = {
  radius: 4,
  draw: function() {
    console.log('draw method');
  }
};

for (let prop in circle) console.log(prop, circle[prop]);

for (let key of Object.keys(circle)) console.log(key, circle[key]);

for (let entry of Object.entries(circle)) console.log(entry, circle[entry]);

if ('radius' in circle) console.log('YES');
