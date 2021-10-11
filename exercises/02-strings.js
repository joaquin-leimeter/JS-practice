/*
CONSIGNA
a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

//START
console.log('EXERCISE 2');

//a
var myFirstLongString = 'admittance';
var myFirstLongStringMayus = myFirstLongString.toUpperCase();
console.log('a:', myFirstLongStringMayus);

//b
var mySecondLongString = 'conduction';
var mySecondLongStringShort = mySecondLongString.substring(0,5);
console.log('b:', mySecondLongStringShort);

//c
var myThirdLongString = 'locomotion';
var myThirdLongStringShort = myThirdLongString.substring(myThirdLongString.length - 3);
console.log('c:', myThirdLongStringShort);

//d
var myFourthLongString = 'inCandEscEnCe';
var myFourthLongStringFirstLetter = myFourthLongString.substring(0,1);
var myFourthLongStringRest = myFourthLongString.substring(1);
var myFourthLongStringFinished = myFourthLongStringFirstLetter.toUpperCase() + myFourthLongStringRest.toLowerCase();
console.log('d:', myFourthLongStringFinished);

//e
var stringWithASpace = 'my creation';
var indexE = stringWithASpace.indexOf(' ');
console.log('e:', indexE);

//f
var lastLongString = 'rEmasteRed puniSHmenT';
//search for index
var indexF = lastLongString.indexOf(' ');
//separete words
var firstWord = lastLongString.substring(0, indexF);
var secondWord = lastLongString.substring(indexF + 1);
//format words
var firstWordFormatted = firstWord.substring(0,1).toUpperCase() + firstWord.substring(1, firstWord.lenght).toLowerCase();
var secondWordFormatted = secondWord.substring(0,1).toUpperCase() + secondWord.substring(1, secondWord.lenght).toLowerCase();
//concatenate them and show
var LastLongStringFormatted = firstWordFormatted + ' ' + secondWordFormatted;
console.log('f:', LastLongStringFormatted);
