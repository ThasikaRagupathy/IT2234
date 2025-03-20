//write recursive Function to print numbers from 1 to n
function recursiveNum(n)
{
    if (n > 0) 
	{ 
        recursiveNum(n - 1); 
        console.log(n); 
    }
}
recursiveNum(5); 
