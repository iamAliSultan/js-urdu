/*object can declare into 2 ways literall or constructor 
->singleton when we create object  from constructor than object will be singleton
->object.create
->object literals do not create singleton object
 ->literall these curlys bracket are object
->const jsuser = {} */
const jsuser = {
    name : "Ali",
    age:18,
    email: "ali.gmail.com",
    isLoggedIn: false,
    lastLoggedIn:['monday','saturday']
}
console.log(jsuser.email)
console.log(jsuser)
//another way to access the object 
console.log(jsuser["email"])
// when we have situation like {"full name" : "Ali Sultan"} we cannot access it due to space between full and name  through .email than we have to use ["email"]
//or when we have space between in variable than we have to use in string form
const as = {
   "full name":  "AliSultan",
}
console.log(as["full name"])
console.log(as.fullname)
//use of symbol
const sym = Symbol("key1")
const  mauser = {
   sym: "mykey1" ,//its will not act as a symbol it can print the value but in string form output> sym:"mykey1"
   [sym]: "mykey2"//in it it  will act as a symbol output> key1:"mykey2"
}
console.log(mauser.sym)
console.log(mauser[sym])
console.log(mauser)
console.log(typeof mauser.sym) //type string
console.log(typeof [sym]) //type object

///how to change values
jsuser.email = "alisultan@gmail.com"
//freeze method can lock the values that cannot be changed
//Object.freeze(jsuser)
//after it show the previous values do not update it
jsuser.email= "malik@gmail.com"
console.log(jsuser)


//add the functions in object 
jsuser.greeting = function(){
   console.log("hello Ali")
}
console.log(jsuser.greeting)
console.log(jsuser.greeting())//it will run when object is not freeze or we have to call it in a function foam like ()

//now reference a same object varaible in a function
jsuser.Two = function(){
   console.log(`hello  ${this.name,this.age}`) // just use backtracks `` or ${} or in it use this method
}
console.log(jsuser.Two())