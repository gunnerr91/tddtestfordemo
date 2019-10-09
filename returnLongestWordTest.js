const testLibrary = require("./testLibrary.js");

testLibrary.it("should match", () => {
  testLibrary.assertAreEqual(1, 1);
});

testLibrary.it("should match", () => {
  testLibrary.assertAreEqual(1, "1");
});
