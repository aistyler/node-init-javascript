const hello = require("./index");

describe("# index", () => {
  it("## hello", () => {
    expect(hello).not.toBe(null);
  });
});
