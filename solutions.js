// Sum of Two Numbers
function sum(a, b) {
  if(isNaN(a) || isNaN(b) ){
    console.log("Los datos de entrada no son adecuados")
    
  }else{
    let c = 0
    c= a+b 
    
    console.log(c)
    return(c)

  }
 
}

// Factorial of a Number
function factorial(n) {
  let resul = 1
  if(isNaN(n)){
    console.log("Los datos de entrada no son adecuados")
  }else{
    for(n;n>1; n-- ){
      resul *= n
   }
    console.log(resul)
    return(resul)

  }
  
  
}

// Find the Largest Number
function findLargest(arr) {
  let mayor = arr[0]
  if(!Array.isArray(arr) ){
    console.log("Los datos de entrada no son adecuados")
  }else{
    
    for(let i = 1; i <= arr.length; i++){
      if(arr[i]>mayor){
        mayor = arr[i]
      }
    }
    console.log(mayor)
    return(mayor)
  }
  
  
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
  } else {
    let count = 0;
    for (let char of str) {
      if ('aeiouAEIOU'.includes(char)) {
        count++;
      }
    }
    console.log(count);  // Move this line before the return statement
    return count;
  }
}


// Check if a Number is Prime
function isPrime(n) {
  
  if(isNaN(n)){
    console.log("Los datos de entrada no son adecuados")
  }else{
    if (n <= 1) {
      return false;
    }

  
  for (let i = 2; i <= Math.sqrt(n); i++) 
  {
      if (n % i == 0) {
          return false; 
      }
  }

  return true; 
  }
}

  


module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
