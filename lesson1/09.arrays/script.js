' use strict'

const myArray = ['hello', 2, 3, 4, 5, 6];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray.length);
console.log('last element', myArray[myArray.length - 1]);
myArray[0] = 'World';
console.log(myArray[0]);
console.log(myArray);

// map
const myArr = [1, 2, 3];
const result = myArr.map(num => {
    console.log('num' , num)
    return num + 1;
})
console.log('result' , result);
myArr.push(4);
console.log(myArr);

myArr.splice(1, 1, '12345');
console.log(myArr);

//objet
const user = {
    name: 'Pierre',
    status: 1,
    email: 'test@ynov.com',
    pets: ['cat', 'dog', 'hamster'],
    car: {
        color: 'red',
    }
};
console.log(user);
console.log(user.name);
console.log(user['name']);
const key = 'status';
console.log(user[key]);