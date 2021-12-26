'use strict'

const   obj = {
    John: [100, 90, 80],
    Bob: [100, 70, 80],
    Vally: [200, 70, 100, 100],
    Dan: [100, 20, 10],
    Jack: [200, 100, 80, 80, 80],
    }

const newArr = [];
const newArray = [];
let max = 0;
let index = 0;

for (let key in obj) {
newArr.push(obj[key]);
newArray.push(key);
}

const average = (newArr) => {
const sum = newArr.reduce((a, b) => a + b);
return sum / newArr.length;
}
const averageWithin = () => {
const res = newArr.map(el => Math.floor(average(el)));

max = Math.max(...res);
index = res.indexOf(max);
return `${newArray[index]} is the student who's average score is highest: ${max}`;
};
console.log(averageWithin());
