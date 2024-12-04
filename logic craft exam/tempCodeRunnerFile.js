let num = 19
let flag = true
for(let i = 2; i<num/2; i++){
    if(num%i == 0){
        flag = false
        break
    }
} 

if(flag){
    console.log(`${num} is a prime Number`)
}else{
    console.log(`${num} is not a prime Number`)
}