'use strict';

// динамическая типизация - это преврать один вид данных в другу


// ПРЕВРАЩАТЬ В СТРОКУ
// спопособ №1

console.log(typeof(String(null))); //Метод String один из самых старых способов превратить данные в строку

console.log(typeof(String(5))); // так же работает с цифрами

// спопособ №2 (Канкатинация)

console.log(typeof(null + '')); // при сложении с строкой всегда получается строка

const num = 5;

console.log('https://vk.com/catalog/' + num); // реальный пример

const fontSize = 26 + 'px'; // реальный пример 2

console.log(typeof(fontSize));


// ПРЕВРАЩАТЬ В ЧИСЛО

// способ №1

console.log(typeof(Number('а')));

// способ №2 (Унарный плюс)

console.log(typeof(+'g'));

// способ №3 (Методы)
console.log(typeof(parseInt('15px', 15)));


