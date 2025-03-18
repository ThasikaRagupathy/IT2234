//arr=[1,2,3,4,5,6]
//target=7
//write a code find the all pairs that sum up to the target
console.log("Target")
let arr=[1,2,3,4,5,6]

for(let i=0;i<arr.length;i++)
{
	for(let j=0;j<arr.length;j++)
	{
		if(arr[i]+arr[j]==7)
		{
			console.log(arr[i],arr[j])
		}
	}
}
