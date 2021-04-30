let string = 'arara'
function verificaPalindrome(string){
 
 for (let indo= 0,voltando = string.length - 1; indo < string.length; indo += 1,voltando -= 1){
   if (string.length === indo && string.length === voltando){
     return true
   } else {
     return false
   }
 }
}
 
console.log(verificaPalindrome(string))


// function verificaPalindrome(string){
// }
// let string = 'pato'
// for (let indo = 0; indo < string.length; indo += 1){
//   for (let voltando = string.length; indo < string.length; indo -= 1)
// if (string.length === voltando){
//   console.log (true)
// }else {
//   console.log (false)
// }
// }
// // console.log(string)