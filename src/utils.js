// Your code here
export function isPalindrome(str) {
  const convertedStr = str.toLowerCase();
  const reversedStr = convertedStr.split("").reverse().join("");

  if (str === "" || convertedStr !== reversedStr) {
    return false;
  } else {
    return true;
  }
}
