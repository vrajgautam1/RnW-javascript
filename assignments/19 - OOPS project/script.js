// -1

// class School{
    
//     student(name, email, contact){
//         this.name = name
//         this.email = email
//         this.contact = contact
//         console.log(`Hello i am ${this.name}, i am a Student, my email is: ${this.email} and my contact is ${this.contact}`)
//     }

//     faculty(name, email, contact){
//         this.name = name
//         this.email = email
//         this.contact = contact
//         console.log(`Hello i am ${this.name}, i am a Faculty, my email is: ${this.email} and my contact is ${this.contact}`)
//     }

//     peon(name, email, contact){
//         this.name = name
//         this.email = email
//         this.contact = contact
//         console.log(`Hello i am ${this.name}, i am a Peon, my email is: ${this.email} and my contact is ${this.contact}`)
//     }
// }

// let rohan = new School()
// rohan.student('Rohan', 'rohan@gmail.com', 1234567890)

//-2

// class Person{
//     constructor(age){
//         this.age = age
//     }

//     father(){
//         console.log(`father age is ${this.age}`)
//     }
//     son(){
//         console.log(`Son age is ${this.age}`)
//     }
// }

// let jayesh = new Person(30)
// let suresh = new Person(40)
// jayesh.father()
// suresh.son()

//-3
// class Employee{
//     constructor(){
//         console.log(`hello world`)
//     }
// }

// let ramesh = new Employee()

//-4
// class Shape{
    

//     circle(r){
//         this.r = r
//         console.log(`${(this.r*3.14).toFixed(2)}`)
//     }

//     square(w, h){
//         this.w = w
//         this.h = h
//         console.log(`${Number((this.w * this.h).toFixed(2))}`)
//     }
// }

// let bhargav = new Shape()
// let shubham = new Shape()
// bhargav.circle(5)
// shubham.square(3,4)

//-5

// class Mobile{
//     mobileIntro(){
//         console.log(`mobile model is ${this.model} and mobile color is ${this.color}`)
//     }
// }

// Mobile.prototype.setColor = function(color){
//     this.color = color
// }

// Mobile.prototype.setModel = function(model){
//     this.model = model
// }


// let vivo = new Mobile()
// vivo.setColor('red')
// vivo.setModel('z40')
// vivo.mobileIntro()

//-6
// class Employee{
//     constructor(name, age, salary){
//         this.name = name
//         this.age = age
//         this.salary = salary
//     }

//     emp(){
//         console.log(`${this.name} is ${this.age} years old and his salary is ${this.salary}`)
//     }
// }

// Employee.prototype.setDesignation = function(designation){
//     this.designation = designation
// }

// let vraj = new Employee("vraj", 21, 30000)
// vraj.setDesignation("admin")

// console.log(vraj)


//-7
// const gameArr = ["valorant", "cod", "god of war"]

// function Games (){

// }

// Games.prototype.doUpperCase = function(arr){
//     let arrUpper = arr.map(game => game.toUpperCase())
//     console.log(arrUpper)
// }

// let myGames = new Games()
// myGames.doUpperCase(gameArr)