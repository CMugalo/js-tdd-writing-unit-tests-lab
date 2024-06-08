// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true if the string is a palindrome, and false if it isn't", () => {
    const wordOne = "racecar";
    const palindromeCheck = isPalindrome(wordOne);

    expect(palindromeCheck).toBe(true);
  });

  it("should return true for words that are a combination of uppercase and lowercase letters", () => {
    const wordTwo = "raCecAR";
    const palindromeCheckTwo = isPalindrome(wordTwo);

    expect(palindromeCheckTwo).toBe(true);
  });

  it("should return false for an empty string", () => {
    const wordThree = "";
    const palindromeCheckThree = isPalindrome(wordThree);

    expect(palindromeCheckThree).toBe(false);
  });
});
