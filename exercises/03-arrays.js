/*
a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
e) Invertir el orden del array (utilizar reverse).
f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

//START
console.log('EXERCISE 3');

//a
var monthList = 
[
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'Dicember'
];
console.log('a:', monthList[4], monthList[10]);
var monthListCopy = Object.assign([], monthList);

//b
var monthListAlfabetical = monthList.sort();
console.log('b:', monthListAlfabetical);

//c
monthList.unshift('Christmas');
monthList.push('Banana');
console.log('c:', monthList);

//d
monthList.shift();
monthList.pop();
console.log('d:', monthList);

//e
monthList.reverse();
console.log('e:', monthList);

//f
monthListString = monthList.join(' - ');
console.log('f:', monthListString);

//g
monthListCopySliced = monthListCopy.slice(4, 11);
console.log('g:', monthListCopySliced);