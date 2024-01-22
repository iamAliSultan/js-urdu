//first step is to simple for print number or in second in object it gave output with type number
const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)
//it use to change number to string type
console.log(balance.toString())
//we can use method reltaed to string like
console.log(balance.toString().length)
//to fixed method is used to fixed the precison value in it we fixed 2 so the output is 100.00
console.log(balance.toFixed(2))
//precision method is used to round off the number 
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))
//toLocaleString is used to give commas between the amount like 100000 > 100,000 while en-PA or en-In mean in which type currency you change
const hundred= 100000
console.log(hundred.toLocaleString('en-PA'))
//+++++++++++MATH+++++++++
//Math is a object that can store methods
console.log(Math);
//absoulute this method change neagative value into the positive
console.log(Math.abs(-4))
//round method is use for round off
console.log(Math.round(4.6))
//ceil method also used for round off but if we have .1 value greater than it always assign next number like 4.1 output is 5
console.log(Math.ceil(4.1))
//same floor will assign previous one like we have 4.9 output will be 4
console.log(Math.floor(4.9))
//min max is used to gave greater one or smaller one
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))
//random method is always gave value between 0 and 1 mostly in decimal
console.log(Math.random())
//to take value greater multiply it is with 10 but its not guranted 0 valuce can also come
console.log(Math.random()*10)
//to make guranted to have value greater than zero add 1 
console.log(Math.random()*10) + 1
//to have value according to the requirement than use this function and we use floor method cuz we have maximum limit due to ceil sometime it will increase from it max and we use min due to this same scinerio
//and use 1 to avoid 0 value
const min = 30
const max = 40
console.log(Math.floor(Math.random()*(max-min+1)) + min)
