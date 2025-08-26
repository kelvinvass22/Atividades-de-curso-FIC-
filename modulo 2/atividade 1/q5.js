let valores = [1,2,3,4,5,6,7,8,9,10];

if (valores.includes(7)) {
    console.log("O número 7 está na lista");
} else {
    console.log("O número 7 não está na lista");
}

let acimaDeCinco = valores.filter(n => n > 5);

console.log("Números maiores que 5:", acimaDeCinco);
