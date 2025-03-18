//reverse the array using push and pop
//a b c d -> d c b a
console.log("Reverse the array using push and pop")
let arr4=[]
arr4.push('a')
arr4.push('b')
arr4.push('c')
arr4.push('d')
console.log(arr4)
for(let i=arr4.length-1;i>=0;i--)
{
	let arr5=arr4.pop();
	console.log(arr5)
}
