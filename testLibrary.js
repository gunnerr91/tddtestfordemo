var _testName;

const logType = {
  failed: { colourCode: "1", text: "failed" },
  passed: { colourCode: "2", text: "passed" }
};

const consoleLog = (logType, message) => {
  console.log(
    `\x1b[3${logType.colourCode}m%s\x1b[0m`,
    `${_testName} - ${logType.text} 
      ${message ? message : ""}`
  );
};

module.exports = {
  it: (testName, testCallback) => {
    _testName = testName;
    testCallback();
  },
  assertAreEqual: (expected, actual) => {
    expected === actual
      ? consoleLog(logType.passed)
      : consoleLog(logType.failed, `expected: ${expected} actual: ${actual}`);
  }
};
