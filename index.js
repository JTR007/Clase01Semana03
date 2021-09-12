
let cantidaDeNumeros = prompt("Ingrese el numero");

for (let i = 0; i <= cantidaDeNumeros; i++) {

    if (i % 2 == 0) {
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
    
}


let number = 10; 
let multiplo = 9;

for (let i = 0; i <= number; i++) {

    let resultado = i * multiplo
    
    console.log(`${i} * 9 = ${resultado}`) 
      
}

////////////////////////////////
let hasta = 10;

for (let i = 1; i < hasta; i++) {
    
    for (let y = 0; y < hasta; y++) {
        
        let resultado = i * y;
        console.log(`${i} * ${y} = ${resultado}`)
        
    }
    
}
