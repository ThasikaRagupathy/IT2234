//find the max number in the array using forEach

let array1=[16,2,78,12,43,30]

let max=0;
array1.forEach((n)=>{
	(max<n) && (max=n)
})
console.log("Max is "+max)

console.log("***************************************************************************************");

let A=[10,4,56,3,6,35]
let maximum=0
A.forEach((a) =>
{
	if(a>maximum)
	{
		maximum=a;
	}
});
console.log("Maximum value is: "+maximum);
