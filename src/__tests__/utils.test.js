// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true if the string is a palindrome, and false if it isn't", () => {
    const wordOne = "racecar";
    const palindromeCheck = isPalindrome(wordOne);

    expect(palindromeCheck).toBe(true);
  });
});
