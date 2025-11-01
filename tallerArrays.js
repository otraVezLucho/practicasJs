const prompt = require("prompt-sync")();


/*
Ejercicio 1: Calculadora de Propinas
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
propina, y retorne el monto final a pagar (total + propina).
*/
console.log("Tips Calculator\n\n");


let total = 2000
let percent = 0.20
function calTips (total, percent){
    
    let resultPercent = total * percent
    let result = total + resultPercent
    let percentParc = percent*100 
    
    return `Total amount:  ${total}\nTip: ${percentParc}% - ${resultPercent} \nTotal Bill: ${result}`;

};

console.log(calTips(total,percent));

/*

Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.
- Incluye un número.
- Incluye una mayúscula.

*/


console.log("\n");

console.log("Password Validator\n\n");


// 1 solucion pero no me gusto 
function password1(pass){
    if (pass.length <= 8 ){
         return "Password must have at least 8 characters.\n";
        }else if(!pass.match(/\d/)){
            return "Password must contain at least 1 digit";
        } else if(!pass.match(/[A-Z]/)){
            return "Password must contain at least 1 Character in capital";
        }else {
            return true
        }
}

// 2 solucion, si me gusto
function password(pass){
    while (pass.length >= 8 && pass.match(/\d/) && pass.match(/[A-Z]/)){
            return true
        }
}

let passInput = prompt("Enter a password: ")

console.log(password(passInput)); // muestra True

if(!password(passInput)){
    console.log("Password must contain at least 1 digit. \nPassword must contain at least 1 Character in capital. \nPassword must have at least 8 characters.\n");
}else{
    console.log("You're in");
}

 /*
 Ejercicio 3: Buscar Producto en Inventario
- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El
inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
 { nombre: "Camisa", precio: 20 },
 { nombre: "Zapatos", precio: 50 }
];
 */
console.log("\n\n");

console.log("Buscar Producto en Inventario\n");


const stockList = [
 { name: "Camisa", price: 20 },
 { name: "Zapatos", price: 50 }
];

function searchProduct(name, stock){
    for(let i =0; i < stock.length; i++){
        if (stock[i].name == name){
            return `Name: ${stock[i].name} \nPrice: ${stock[i].price}`
        }
        else{
            return null
        }
    }
}

console.log(searchProduct("Camisa", stockList));

 /*
Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
(separadas por comas) y retorne el promedio (redondeado a 2 decimales).
 */

const grades = []

let endWhile = false
while (endWhile == false){

    let gradeInput = parseFloat(prompt("Enter a grade: "));
    grades.push(gradeInput);
    askContinue = prompt("Do you want to add a another grade? Y/N ").toLowerCase();
    console.log(askContinue);
    if (askContinue == "n"){endWhile = true};
      
}
console.log("Grades list", grades);
let resultSum = 0
function averageGrade(grades){
    let result = 0; 
    for ( let i = 0; i < grades.length; i++){
        resultSum += grades[i]
    }
    return resultSum / grades.length

}

console.log("Average ",averageGrade(grades));

/*
Ejercicio 5: Filtrar Usuarios por Edad
- Red social.
Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
cumplen con tener más de 18.

*/


const socialMedia = [
    { name: "Andres", age: 22 }, 
    { name: "Clara", age: 18 },
    { name: "Camila", age: 20 },
    { name: "Ana", age: 25 },
    { name: "Juan", age: 17}
]
let minAge = parseInt(prompt("Enter an age: "))

function filterUser(userArray, minimunAge){
    const listUsers = [] 
    for(let i = 0; i < userArray.length; i++){
        if (userArray[i].age >= minimunAge){
            
            listUsers.push(userArray[i].name)     
             
        }  
              
    } return listUsers 
}


console.log(filterUser(socialMedia, minAge));

/*
Ejercicio 6: Contador de Palabras
-Editor de texto.
Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
espacios).

*/

let stringChain = "luis juan mario andres mateo o lucas"

function countWords(chain){
 let count = chain.split(" ");
 return count.length
}
console.log("Chain to velidate: ", stringChain);
console.log("There are ",countWords(stringChain)," words");


/*
Ejercicio 7: Simulador de Cajero Automático
-App bancaria.
Crea una función retirarDinero(saldo, monto) que:
Pide al usuario su saldo actual y el monto a retirar.
Muestra el nuevo saldo o "Fondos insuficientes".
*/



function withdraw(allowance, amount){
    
if (allowance < amount){
    console.log("Insufficient funds");
}else{
    let result = allowance - amount;
    console.log(`your new amout is: $${result}`);
    }
}

let allowance = parseInt(prompt("enter the amount you have: "));

let withDrawAmount = parseInt(prompt("enter the amount you want to withdraw: "));

withdraw(allowance, withDrawAmount);

/*
Ejercicio 8: Cambio de Moneda
-App de viajes.
Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
pedir al usuario monto en COP y la moneda con la que desea hacer la converción.
*/

function converCurrencies(cop, currency){
    const eur = 4500;
    const usd = 3900; 
    if (currency.match(/USD/)){
        convertion = cop / usd
        //console.log(convertion);
        return convertion.toFixed(2);
    }else if(currency.match(/EUR/)){
        convertion = cop / eur
        //console.log(convertion);
        return convertion.toFixed(2);
    }else{
        console.log("write the correct currency symbol to exchange");
        
    }

}

let cop = parseFloat(prompt("Enter the amount in COP to convert: ") ,2);
let currency = prompt("Enter the currency you want to exchange -> (USD / EUR): ").toUpperCase();

console.log(converCurrencies(cop,currency));

