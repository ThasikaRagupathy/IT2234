//[4,8,3,4,3,2,1,8,4]
////find the most frequent element in the array
let freq=[4,8,3,4,3,2,1,8,4];
let mostFrequentElement=freq[0];
let maxCount=0;

for(let i=0;i<freq.length;i++)
{
	let count=0;
	
	for(let j=0;j<freq.length;j++)
	{
		if(freq[j]===freq[i])
		{
			count++;
		}
	}
if(count>maxCount)
{
	maxCount=count;
	mostFrequentElement=freq[i];
}
}
console.log("Most frequent element is: "+mostFrequentElement)
