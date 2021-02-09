// Added Kelvin

let kelvin = 0;

// Added Celsius
let celsius = kelvin - 273;

// Added Fahrenheit;
let fahrenheit = celsius * (9/5) + 32;

// fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton scale

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees in Newton Scale.`)