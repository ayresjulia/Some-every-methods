//SOME: numbers are odd
function hasOddNumber(arr) {
    return arr.some((odd) => {
        return odd % 2 !== 0;
    })
}
console.log(hasOddNumber([1,2,2,2,2,2,4])); // true
console.log(hasOddNumber([2,2,2,2,2,4])); // false

//SOME: number contains zero
function hasAZero(num) {
    return num.toString().split('').some((zero) => {
        return zero === '0';
    })
}
console.log(hasAZero(3332123213101232321)); // true
console.log(hasAZero(1212121)); // false

//EVERY: number is odd
function hasOnlyOddNumbers(arr) {
    return arr.every((odd) =>{
        return odd % 2 !== 0;
    })
}
console.log(hasOnlyOddNumbers([1,3,5,7])); // true
console.log(hasOnlyOddNumbers([1,2,3,5,7])); // false

//EVERY: number is unique, no dups
function hasNoDuplicates(arr) {
    return arr.every((num) => {
        return arr.indexOf(num) === arr.lastIndexOf(num);
      });
}
console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3])); // true

//EVERY: obj has a key
function hasCertainKey(arr, key) {
    return arr.every((k) => {
        return key in k;
    })
}
var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]
console.log(hasCertainKey(arr,'first')); // true
console.log(hasCertainKey(arr,'isCatOwner')); // false

//EVERY: key has same value
function hasCertainValue(arr, key, searchValue) {
    return arr.every((x) => {
        return x[key] === searchValue;
    })
}
var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]
console.log(hasCertainValue(arr,'title','Instructor')); // true
console.log(hasCertainValue(arr,'first','Elie')); // false