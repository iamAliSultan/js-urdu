/*arrays  contain square brackets it can be number string or boolean
->arraay is object
->in javascript arrays can be resizeable mean we can edit it again
->arry index is start with 0
->array create shallow copies
->shallow copies is copy who share same reference point mean if we make change in behind the orginal one also change 
->deep copies mean a copy with difference reference point mean orginal one do not change while we have a copy
->in array we use shallow concepts*/

const myArr = [0,1,2,3,4,5]
const stringArray= ["A","B","C","D"]
//while in creating object we can do it without square brackets
const arry2 = new Array(1,2,3,4,5)
console.log(myArr)
console.log(myArr[1])
console.log(stringArray[0])
console.log(arry2)
//Arrays Method
//push Method simply add values in last in our arrays
myArr.push(6)
myArr.push(7)
console.log(myArr)
//pop method remove the last value in array
myArr.pop(7)
console.log(myArr)
//unshift method simply add value at start and have the first index value so all index others arrays is changed so for bigger projects its time consuming due to change of every index value 
myArr.unshift(1)
myArr.unshift(2)
console.log(myArr)
console.log(myArr[0])
//shift  simply remove the value from the first
myArr.shift(1)
console.log(myArr)

//include is a questionarie method gave result in true and false
console.log(myArr.includes(6))
//indexof is use to tell the value of the index in it -1 mean the value is not present
console.log(myArr.indexOf(5))
console.log(myArr.indexOf(8))
//myArr.join changed the type of the array its change it into string
const newArr = myArr.join()
console.log(myArr)
console.log(typeof myArr)
console.log(newArr)
console.log(typeof newArr)

//slice and splice method
//slice in it we select the index range that we want to show slice(start,end) like (1,3) output start from 1 index values and it on index value 2 so its output is [1,2] cuz in array index value start at 0 and 2 have 3 index value
console.log("A",myArr)

const myn1 = myArr.slice(1,4)
console.log(myn1)
console.log("B",myArr)
//splice  just cut off the portion that we gave like (1,4) from the orginal array (1,4) index values
const myn2 = myArr.splice(1,4)
console.log(myn2)
console.log("C",myArr)





 