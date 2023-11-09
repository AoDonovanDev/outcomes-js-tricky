function isPalindrome(string){
  return string.toLowerCase().replaceAll(' ', '') === string.toLowerCase().split('').reverse().join('').replaceAll(' ', '')
}

console.log(isPalindrome('cat'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('taco cat'))