/*
CONSIGNA
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
   “Bebe” si la edad es menor a 2 años;
   “Nino” si la edad es entre 2 y 12 años;
   “Adolescente” entre 13 y 19 años;
   “Joven” entre 20 y 30 años;
   “Adulto” entre 31 y 60 años;
   “Adulto mayor” entre 61 y 75 años;
   “Anciano” si es mayor a 75 años.
*/

//START
console.log('EXERCISE 4');

//a
randomNumber = Math.random();
if (randomNumber >= 0.5) {
   alert('Greater than 0.5');
} else {
   alert ('Lower than 0.5');
}

//b
randomAge = Math.random() * 100;
console.log (randomAge);
if (randomAge < 2) {
   alert('baby');
} else if (randomAge < 13) {
   alert('child');
} else if (randomAge < 20) {
   alert('Teenager');
} else if (randomAge < 31) {
   alert('Young person');
} else if (randomAge < 61) {
   alert('Adult');
} else if (randomAge < 76) {
   alert('middle Aged individual');
} else {
   alert ('Old');
}
