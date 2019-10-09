var _testName;
const throwMessages = {
  notEqual: (expected, actual) => {
    return `expected: ${expected} actual: ${actual}`;
  }
};

const throwError = (expected, actual) => {
  console.log(
    "\x1b[31m%s\x1b[0m",
    `${_testName}  
  ${throwMessages.notEqual(expected, actual)}`
  );
  throw new Error();
};

module.exports = {
  it: (testName, testCallback) => {
    _testName = testName;
    testCallback();
  },
  assertAreEqual: (expected, actual) => {
    if (typeof expected !== typeof actual && expected !== actual)
      throwError(expected, actual);
    else
      console.log(
        "\x1b[32m%s\x1b[0m",
        `${_testName} - Passed 
    `
      );
  }
};
