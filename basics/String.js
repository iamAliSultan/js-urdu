const name = new String("ali-Sultan")
//console.log(name [0])
console.log(name)
console.log(name [0]);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('l'));
//to create substring just we have start and end value and last value is not concluded
const newstring = name.substring(0,9)
console.log(newstring)
//in slice we can also gave negative value in slice
const anotherstring = name.slice(-0,9)
console.log(anotherstring)
//Trim is use to remove extra space
const newStringOne= "    alisultan      "
console.log(newStringOne)
console.log(newStringOne.trim())
//replace is use to just replace the words
const car = "mg"
console.log(car.replace('m','a'))
//include is use to check this word is included in string or not if included than its gave true otherwise false
console.log(car.includes('m'))
//Split is use to split - or spaces or any other attributes into comma
console.log(name.split('-'))

//TO CONCATE OR WRITE TWO NAME TOGETHER
const NAME = "ALI"
const REPOCOUNT = 50
console.log(NAME + REPOCOUNT + "value")   

//ANOTHER WAY TO ADD
//INSTEAD OF USING + JUST USE BACKTRACKS `` WITH ${}
console.log(`HELLO MY NAME IS ${NAME} AND MY REPO COUNT IS ${REPOCOUNT}`)

//DEEFING STRING 
//SIMPLE WAY>
const names = "ALI" 
console.log(names)
//output>
//ALI

//WHILE WHEN WE DEFINE IT IN  TAKING object
const GAMENAME = new String("ALI")
console.log(GAMENAME)
//output>
//STRING{'ALI'}