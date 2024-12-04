//-1 find vowels and consonants
// let str = "Nrupul"
// let vowelCount = 0
// let consonantCount = 0
// let vowels = "aeiouAEIOU"
// for(let i of str){
//     if(vowels.includes(i)){
//         vowelCount++
//     }else{
//         consonantCount++
//     }
// }

// console.log(vowelCount, consonantCount)

//-2
// let num = 19
// let flag = true
// for(let i = 2; i<num/2; i++){
//     if(num%i == 0){
//         flag = false
//         break
//     }
// }

// if(flag){
//     console.log(`${num} is a prime Number`)
// }else{
//     console.log(`${num} is not a prime Number`)
// }

//-3

// let str = "AaBbCd"
// let emptyStr = ""

// for(let i of str){
//     if(i === i.toUpperCase()){
//         i = i.toLowerCase()
//         emptyStr += i
//     }else if(i === i.toLowerCase()){
//         i = i.toUpperCase()
//         emptyStr += i
//     }
// }

// console.log(emptyStr)

//-4

// let arr = [1, 1, 3, 4, 5, 5, 6, 7, 8, 8];

// let sum = 0

// for(let i = 0; i<arr.length; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             sum += arr[i]
//             break
//         }
//     }
// }

// console.log(sum)

//-5

// function palindrome(str) {
//   let revStr = str.split().reverse().join();
//   if (str === revStr) {
//     console.log(`${str} is a palindrome`);
//   }
// }

// palindrome("racecar")
