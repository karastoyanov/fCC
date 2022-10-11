function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, ''); // removing all special characters and spaces
  str = str.toLowerCase(); // changing all characters to lower case

  const arrVal = str.split(''); // we are using .split function to convert the string to array

  const revArrVal = arrVal.reverse(); // reversing the array

  const strReversed = revArrVal.join(''); // joining the reversed array in a new string;

  if (str == strReversed){
    return true;
  } else {
    return false;
  }
}
palindrome("eye");
palindrome('test');
palindrome("popo");
