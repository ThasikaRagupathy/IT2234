 //simple arithmetic Calculations
 let A = 45; 
 let B = 76;
 console.log("Addition: "+(A + B)); 
 console.log("Substraction: "+(A - B)); 
 console.log("Multiplication: "+(A * B)); 
 console.log("Division: "+(A / B)); 
 
 //print 1 to 10 numbers
 console.log("print 1 to 10 numbers")
 for(let i = 1; i <= 10; i++) 
 { 
   console.log(i); 
 } 
 
 //print only odd numbers
 console.log("print only odd numbers")
for(let p=1;p<=16;p++)
{
	if(p%2!=0)
	{
		console.log(p)
	}
}

//print the numbers in reverse order
 console.log("print the numbers in reverse order")

 for(let k = 20; k > 0; k--) 
 { 
   console.log(k); 
 } 
 
//Reverse the numbers in left and right 4321-5-9876
console.log("Reverse the numbers in left and right like 4321-5-9876")
var x = 11
var mid = parseInt(x/2) + 1;

for(var y= mid - 1; y>0; y--)
{
	console.log(y)
}

console.log(mid);

for(var y = x; y>mid; y--)
{
	console.log(y)
}
