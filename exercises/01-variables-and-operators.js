/*
a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
*/

//START
console.log('EXERCISE 1');

//a
var num1 = 1.579;
var num2 = 1.562;
var sum = num1 + num2;
console.log('a:', sum);

//b
var word1 = 'conca';
var word2 = 'tenado';
var bothWords = word1 + word2;
console.log('b:', bothWords);

//c
var bothWordsLength = bothWords.length;
console.log('c:', bothWordsLength);