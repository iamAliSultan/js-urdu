const accountId = 12345
let accountEmail = "ali@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;
//we can declare variable by using let,  var and sometime without both of them
//accountId =3   const variable cannot be changed
accountEmail = "aS@gmail.com"
accountPassword = " 12344"
accountCity = "bengalru"
/*
prefer not to use var 
beaceuse of issue in block scope and functional scope
*/

console.log(accountId);
//to take all mention names collectively
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
