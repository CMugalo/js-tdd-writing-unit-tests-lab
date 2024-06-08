// Your code here
export function isPalindrome(str) {
  const convertedStr = str.toLowerCase();
  const reversedStr = convertedStr.split("").reverse().join("");

  if (str === "") {
    return false;
  } else if (convertedStr !== reversedStr) {
    return false;
  } else {
    return true;
  }
}
