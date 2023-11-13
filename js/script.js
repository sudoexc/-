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


// ВСЕ ЧТО МЫ ПОЛУЧАЕМ ОТ ПОЛЬЗОВАТЕЛЯ ВСЕГДА БУДЕТ ТИПОМ ДАННЫХ СТРОКА


// в булиновое значение

0, '', null, undefined, NaN;   //это все всегда приходит как false, а все остальное true


// способ №1
let switcher = null;

if (switcher) {
    console.log('working...');
}

switcher = 1;

if (switcher) {
    console.log('working...');
}


// способ №2
console.log(typeof(Boolean(4)));


// способ №3
console.log(typeof(!!'444')); // !! перед строкой превращает строку в булинувую тип данных. работает так же с цифрами