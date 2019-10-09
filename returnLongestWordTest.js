const testLibrary = require("./testLibrary.js");

const findLongestWord = sentence =>
  sentence
    .split(" ")
    .reduce((largestWord, currentWord) =>
      largestWord.length > currentWord.length ? largestWord : currentWord
    );

testLibrary.it("should return a string", () => {
  const sentence = "hello this room is here blahhhhh";
  const result = findLongestWord(sentence);

  testLibrary.assertAreEqual("string", typeof result);
});

testLibrary.it("should return one word", () => {
  const expectedWord = "blahhhhh";
  const sentence = `hello this room is here ${expectedWord}`;
  const result = findLongestWord(sentence);

  testLibrary.assertAreEqual(expectedWord, result);
});

testLibrary.it("should return longest word", () => {
  const expectedWord = "blahhxxcsdfchhh";
  const sentence = `hello this room is ${expectedWord} here`;
  const result = findLongestWord(sentence);

  testLibrary.assertAreEqual(expectedWord, result);
});
