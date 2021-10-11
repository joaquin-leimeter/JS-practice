/*
a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

//START
console.log('EXERCISE 6');

//a
var num1, num2;
function additionA(num1, num2) {
   return num1 + num2;
}
var addA = additionA(1.5, 2.5);
console.log('a:', addA);

//b 
function additionB(num1, num2) {
   if (Number.isNaN(num1) || Number.isNaN(num2)) {
      return NaN;
   } else {
      return num1 + num2;
   }
}
console.log('b:');
console.log('\t', additionB(1, 2));
console.log('\t', additionB(1, '1'));

//c
function validateInteger(possibleNumber) {
   return !(isNaN(possibleNumber));
}
console.log('c:');
console.log('\t', validateInteger('not a number'));
console.log('\t', validateInteger(1));

//d
console.log('d:')
function isThisAnInteger(possibleInteger) {
   return Number.isInteger(possibleInteger);
}
function additionB(num1, num2) {
   if (isNaN(num1) || isNaN(num2)) {
      return NaN;
   } else {
      if (!(isThisAnInteger(num1))) {
         alert(num1, 'Is not an integer');
         return Math.round(num1);
      }
      if (!(isThisAnInteger(num2))) {
         alert(num2, 'Is not an integer');
         return Math.round(num2);
      }
      return num1 + num2;
   }
}

console.log(additionB('3',2));
