//write a boolean function to find  given number is prime
//divide by only by 1 and itself but not divided by other
function isPrime(n) {
  if (n <= 1)
    return false;

  for (let i = 2; i < n; i++)
    if (n % i == 0)
      return false;

  return true;
}


isPrime(9)
  ? console.log("True")
  : console.log("False");

isPrime(3)
  ? console.log("True")
  : console.log("False");
