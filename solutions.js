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
  let resul = 0
  if(isNaN(n)){
    console.log("Los datos de entrada no son adecuados")
  }else{
    for(n;n=>1; n-- ){
      resul *= n
      
      console.log(resul)
      return(resul)
   }

  }
  
}

// Find the Largest Number
function findLargest(arr) {
  if(!Array.isArray(arr) || isNaN(arr)){
    console.log("Los datos de entrada no son adecuados")
  }else{
    let mayor = arr[0];
    for(let i = 0; i < myArray.length; i++){
    
    if(arr[i+1]>arr[i]){
      mayor = arr[i+1]
    }
  }
  console.log(mayor)
  return(mayor)

  }
  
}

// Count Vowels in a String
function countVowels(str) {
  if(typeof str != 'string'){
    console.log("Los datos de entrada no son adecuados")
  }else{
    let count = 0;
  
    for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
    
    }
    return count;
    console.log(count)

  }
  
}

// Check if a Number is Prime
function isPrime(n) {
  
  if(isNaN(n)){
    console.log("Los datos de entrada no son adecuados")
  }else{
    if (number <= 1) {
      return false;
    }

  
  for (let i = 2; i <= Math.sqrt(number); i++) 
  {
      if (number % i == 0) {
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
