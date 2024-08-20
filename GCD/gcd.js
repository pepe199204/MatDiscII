function gcd(a, b) {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

// Ejemplo de uso
let numero1 = parseInt(prompt("Introduce el primer número: "));
let numero2 = parseInt(prompt("Introduce el segundo número: "));

let resultado = gcd(numero1, numero2);
console.log(`El Máximo Común Divisor de ${numero1} y ${numero2} es: ${resultado}`);

/*
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Ejemplo de uso
let numero1 = parseInt(prompt("Introduce el primer número: "));
let numero2 = parseInt(prompt("Introduce el segundo número: "));

let resultado = gcd(numero1, numero2);
console.log(`El Máximo Común Divisor de ${numero1} y ${numero2} es: ${resultado}`);
*/