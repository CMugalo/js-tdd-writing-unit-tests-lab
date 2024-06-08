// Your code here
export function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  if (str !== reversedStr) {
    return false;
  } else {
    return true;
  }
}
