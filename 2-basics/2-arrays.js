//to joining two arrays push method create array in a array mean 3 index value have full array and if we have to select index 3 it will show us full array if we have to select one from this arraythan we do [3][1]
const mc_heroes = ['superman','spiderman','batman']
const dc_heroes = ['ironman','bublebin','xman']
/*mc_heroes.push(dc_heroes)
console.log(mc_heroes)
console.log(mc_heroes[3])
console.log(mc_heroes[3][0])*/

//while from joing two arrays we use concat and spread method spread mean(...)
//concat method provide a two join array in new method or we can say new array
const all_heroes = mc_heroes.concat(dc_heroes)
console.log(all_heroes)
console.log(all_heroes[3])

//spread we usee (...) to spread the arrays and merge it into a new one array or in spread we do not have any limitation of adding values
const new_heroes = [...mc_heroes, ...dc_heroes]
console.log(new_heroes)

//when you have problem like array in arrays
const another_array = [1,2,3,[4,5,6],7,[3,8,[2,6,7]]]
//there we use flat method to make it in one another array in flat we have to tell about the depth how much we need or we use infinity 
const we_array = another_array.flat(3)
console.log(we_array)
const i_array = another_array.flat(Infinity)
console.log(i_array)


//converting string into array
//first we ask is that array or not
console.log(Array.isArray("Ali"))
// by usinf from method it will convert it into array its happen in only string form like using ""
console.log(Array.from("Ali"))
//while when we have situation like ({name: "hitesh"}) it will not didect it cuz only keys can become array so it will gave output as an empty array[]
console.log(Array.from({name: "hitesh"}))

//when we have to merge set of elements in array we can use of method instead of from  
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
