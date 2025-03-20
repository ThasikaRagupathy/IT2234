//arrow function
const msg =()=>{return console.log("Hello")}
msg()

console.log("*****************************************************")

//write an arrow function to sum 2 numbers
const sum= () =>{return console.log(4+9)}
sum()

const add=(a,b)=>{return a+b}
console.log(add(4,5))
console.log("*****************************************************")

//default parameters
const mult=(c,d=2)=>{return c*d}
console.log(mult(6,7))
console.log(mult(3))
console.log("*****************************************************")

//rest parameter
const mysum=(...n)=>{
	let s=0
	n.forEach((i)=>s=s+i)
	console.log(s)
}
mysum(4,5,6,89,2)
console.log("*****************************************************")

//best way to do array sum
const sums =(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(sums(1,2,3,4,5))
console.log("*****************************************************")

const multTwo=(n)=>n*2
const arr=(mul,...n)=>
{
	n.forEach((i)=>console.log(mul(i)))
}
arr(multTwo,4,5,6,7,8)
console.log("*****************************************************")

//callback function

const greet =(msg,fun)=>{
	console.log("Hi.."+msg)
	fun()
}
greet("Good morning",()=>{console.log("My name is Tikku")})