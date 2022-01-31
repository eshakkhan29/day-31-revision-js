// array 
let list = [23, 24, 323, 323, 32, 32,32, 32,3, 3, 23, 545];
// kono songkhar index jante 
console.log(list.indexOf(24));

 // index diye kono songkha ber korte 
console.log(list[4]);

// array er ekta man chang korote index namber diye
list[0] = 2;
console.log(list);

// array er last e kono value add korte 
list.push(56);
console.log(list);

// array er last theke bad dite 
list.pop();
console.log(list);

// array er first theke bad dite
list.shift();
console.log(list);

// array er first e add korte 
list.unshift("lol");
console.log(list);
