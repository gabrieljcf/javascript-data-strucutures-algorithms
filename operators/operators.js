var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1: ' + (num == 1));
console.log('num === 1: ' + (num === 1));
console.log('num != 1: ' + (num != 1));
console.log('num > 1: ' + (num > 1));
console.log('num < 1: ' + (num < 1));
console.log('num >= 1: ' + (num >= 1));
console.log('num <= 1: ' + (num <= 1));
console.log('true && false: ' + (true && false));
console.log('true || false: ' + (true || false));
console.log('!true: ' + (!true));

console.log('----operators bitwise----');
console.log('5 & 1: ', (5 & 1));
console.log('5 | 1: ', (5 | 1));
console.log('~ 5: ', (~5));
console.log('5 ^ 1: ', (5 ^ 1));
console.log('5 << 1: ', (5 << 1));
console.log('5 >> 1: ', (5 >> 1));

console.log('----operator typeof----');
console.log('typeof num: '+ typeof num);
console.log('typeof packt: '+ typeof 'Packet');
console.log('typeof true: '+ typeof true);
console.log('typeof [1,2,3]: '+ typeof [1,2,3]);
console.log('typeof {name: Jhon Doe}: '+ typeof {name: 'Jhon Doe'});

console.log('----operator delete----');
var myObject = { name: 'Jhon Doe', age: 25};
delete myObject.age;
console.log(myObject)

