//Define Array
console.log("Array 1 Elements")
let array1=[6,7,3,8,2]
console.log(array1)
for(let i=0;i<array1.length;i++)
{
	console.log(array1[i])
}

console.log("Array 2 Elements")
let array2=["BMW","Toyota","Suzuki","Honda","Audi"]
console.log(array2)
for(let j=0;j<array2.length;j++)
{
	console.log(array2[j])
}

array1.forEach((n)=>{
	console.log(n)
})

