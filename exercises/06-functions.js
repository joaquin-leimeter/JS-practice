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
function sumA(num1, num2) {
   return num1 + num2;
}
console.log('a:\t', sumA(1.5, 2.5));

//b 
function sumB(num1, num2) {
   if(typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
   } else {
      return NaN;
   }
}
console.log('b:\tShould be a sum:', sumB(1, 2));
console.log('\tShould be NaN:' , sumB(1, '2'));

//c
function validateInteger(num) {
   if(num % 1 === 0) {
      return true;
   } else {
      return false;
   }
}
console.log('c:');
console.log('b:\t', validateInteger(3));
console.log('\t', validateInteger(3.5));

//d
function sumD(num1, num2) {
   if(typeof num1 === 'number' && typeof num2 === 'number') {
      if(validateInteger(num1) && validateInteger(num2)){
         return num1 + num2;
      } else if (validateInteger(num1)) {
         alert('error: ' + num2 + ' is not an integer')
         return Math.round(num2);
      } else {
         alert('error: ' + num1 + ' is not an integer')
         return Math.round(num2);
      }
   } else {
      return NaN;
   }
}
console.log('d:');
console.log('\t', sumD('hola', 2), 'should be Nan');
console.log('\t', sumD('1', 2), 'should be NaN');
console.log('\t', sumD(1.6, 2), 'should be error alert 1.6 is not an integer and return 2');
console.log('\t', sumD(1, 2), 'should be a sum = 3');

//e
function validateNumber(num){
   if(typeof num === 'number') {
      return true;
   } else {
      return false;
   }
}

function sumE(num1, num2) {
   if(validateNumber(num1) && validateNumber(num2)) {
      if(validateInteger(num1) && validateInteger(num2)){
         return num1 + num2;
      } else if (validateInteger(num1)) {
         alert('error: ' + num2 + ' is not an integer')
         return Math.round(num2);
      } else {
         alert('error: ' + num1 + ' is not an integer')
         return Math.round(num2);
      }
   } else {
      return NaN;
   }
}
console.log('e:');
console.log('\t', sumE('hola', 2), 'should be Nan');
console.log('\t', sumE('1', 2), 'should be NaN');
console.log('\t', sumE(1.6, 2), 'should be error alert 1.6 is not an integer and return 2');
console.log('\t', sumE(1, 2), 'should be a sum = 3');