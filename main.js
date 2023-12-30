//task 1
let myName = 'Oksana';
let year = '27 y.o.';
const familyStatus = 'single';
let haveChildren = true;
let haveNoChildren = false;
let inf = (myName + ' ' + year + ' ' + familyStatus + ' ' + haveNoChildren);
console.log (inf)
console.log (typeof myName);
console.log (typeof year);
console.log (typeof familyStatus);
console.log (typeof haveNoChildren);
console.log (typeof inf);

//task 2
const pi = Math.PI;
let diameterSquared = 10**2;
let height = 3;
let volume = pi * diameterSquared * height / 4 + ' ' + "м.куб.";
console.log (volume)

//task 3
let c = 28;
let c2 = c * 9 / 5;
let f = 32 + c2;
console.log (f);

//task 4
let a = Infinity - "1"; //infinity
let b = "19" + 84; //1984
let d = 2 + +"11"; //13
let e = 99 + 101; //200
let g = "1" - "1"; //0
let h = "Result: " + 10/2; //Result: 10/2
let i = 3 + " bananas " + 2 + " apples "; // 3 bananas 2 apples
console.log (a , b, d, e , g , h , i);