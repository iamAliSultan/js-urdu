//its calculate dates from 1 january 1970 to onward  its a single moment in time in a platform independant format dates calculate in milliseconds 
//temporal api is a porposal for future 
//to check date
let myDate = new Date()
//to check date in String
console.log(myDate.toString())
// gave date in yy/mm/dd format with time
console.log(myDate.toLocaleString())
//to check date into thr string
console.log(myDate.toDateString())
// object is the type of the date
console.log(typeof myDate)


let myCreatedDated = new Date(2023,0,23)
console.log(myCreatedDated.toDateString())

//to show your demanding date in hours

let newDate= new Date(2023,11,15,5,3)
//we mostly use toLocaleString to show date with time
console.log(newDate.toLocaleString())
//to show only time
console.log(newDate.toLocaleTimeString())
//in it to show only date
console.log(newDate.toLocaleDateString())

//when we write in single array to its count month from 0 or when we write it in yy-mm-dd format its start from1
let isDate = new Date("01-14-2023")
console.log(isDate.toDateString())
console.log(isDate.toLocaleString())

//time stamp the time in millisecond from onewards given date
let myTimeStamp = Date.now()
console.log(myTimeStamp)
//now comapare it with our given date mean isDate
console.log(isDate.getTime())
//to convert it in seconds from miliseconds divide it with 1000 and we use Math.floor to avoide decimal point
console.log(Math.floor(Date.now()/1000))
//to show your specific things
let haveDate = new Date()
console.log(haveDate)
console.log(haveDate.getDate())
console.log(haveDate.getTime())
console.log(haveDate.getFullYear())
console.log(haveDate.getMonth())
console.log(haveDate.getDay())

//to have speccific thing that you want for this we write defaut in strings "default" and have object {} with in we write our requirements all we done in using function to locaLeString()
console.log(newDate.toLocaleString("default",{
    weekday: "long",
    month: "2-digit"
}))

